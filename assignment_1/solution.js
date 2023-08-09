/* The following functions are generalized to 
non specific data sets and predicates.*/
function filter(data, predicate){    
    // intialization of solution set
    let solution = [];

    // looping through to test each object of array
    for (let i = 0; i < data.length - 1; i++){
        if (predicate(data[i])){
            solution.push(data[i]);
        }
        
    }
    return solution;   
}


function findLast(data, predicate){
    for (let i = data.length - 1; 0 <= i; i--){
        if (predicate(data[i])) return data[i];
    }  
}


function map(data, callback){
    for (let i = 0; i < data.length; i++){
        data[i] = callback(data[i]);
    }
    return data;
}


function pairIf(data1, data2, predicate){
    let solution = [];
    for (const item1 of data1){
        for (const item2 of data2){
            if((predicate(item1, item2))){
                solution.push([item1,item2]);
            }
        }
    }
    return solution;
}


function reduce(data, reducer, initialValue){
    // intialization of soluion set
    let solution = initialValue;

    // looping through to test each object
    for (let i = 0; i < data.length; i++){
        solution = reducer(data[i], solution);
    }
    return solution; 
}
      

// Defines invalid transactions by amount and product type
let invalidQualities = ((x => (x.amount === 0 || x.amount === "undefined" || x.amount === null)||(x.product !== ("FIG_JAM"))&&(x.product !== ("FIG_JELLY"))&&(x.product !== ("SPICY_FIG_JAM"))&&(x.product !== ("ORANGE_FIG_JELLY"))));
let totalInvalidSubsets = filter(transactions, invalidQualities);
console.log(`Number of invalid transactions: ${totalInvalidSubsets.length}`);


// Identifies total number of customers with non-unique id's, but equivalent emailAddresses
const nonUnique = pairIf(customers, customers, (customer1, customer2) => {
    return (customer1.emailAddress === customer2.emailAddress && customer1.id !== customer2.id);
});
console.log(`Number of duplicate customers: ${nonUnique.length/2}`);


// Determine last transaction with an amount charge over $200 and display results
let lastValue = findLast(transactions, x => (x.amount >= 200)).amount;
console.log(`Most recent transaction over $200: $${lastValue}`);

      
// Define small medium and large transactions and print results
const transactionSize = reduce(transactions, (transaction, acc) =>{
    if (transaction.amount < 25){
        acc.small.push(transaction);
    } else if (transaction.amount > 75){
        acc.large.push(transaction);
    } else {
        acc.medium.push(transaction);
    } return acc;
}, {small: [], medium: [], large: []});

console.log(`Number of small transactions: ${transactionSize.small.length}`);
console.log(`Number of medium transactions: ${transactionSize.medium.length}`);
console.log(`Number of large transations: ${transactionSize.large.length}`);


/* The following code are all calculations for finding names of customers with 
transactions over $200 */

// Filter the list to get only transactions over $200
const filteredList = filter(transactions, x => x.amount > 200);


// Pair each transaction with it's customer
const customerTransPair = pairIf(filteredList, customers, (tranID, customerID) => {
    return (tranID.id === customerID.id);
})


// Reduce the pairs into a list of unique customers
const reducedPairs = reduce(customerTransPair, (pair, accResult) =>{
    if (!accResult.includes(pair[1])){
        accResult.push(pair[1]);
        
    }
    return accResult;
}, [] )
console.log(`Customers with transactions over $200: `);
console.log(reducedPairs);
    

//Map over the reduced list to get the names of the customers.
const namedCustomers = map(reducedPairs, x => x.firstName + " " + x.lastName);
console.log(`Names of customers with transactions over $200: `);
console.log(namedCustomers);



