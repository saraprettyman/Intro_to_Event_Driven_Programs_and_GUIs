// Sample variables
const customers = JSON.parse('[{"id":0,"firstName":"Kellen","lastName":"Sharleen","emailAddress":"Kellen.Sharleen@internet.com"},{"id":1,"firstName":"Kristan","lastName":"Sheila","emailAddress":"Kristan.Sheila@internet.com"},{"id":2,"firstName":"Jojo","lastName":"Gladys","emailAddress":"Jojo.Gladys@internet.com"},{"id":3,"firstName":"Cassi","lastName":"Laurice","emailAddress":"Cassi.Laurice@internet.com"},{"id":4,"firstName":"Ruthie","lastName":"Susette","emailAddress":"Ruthie.Susette@internet.com"},{"id":5,"firstName":"Margery","lastName":"Emmi","emailAddress":"Margery.Emmi@internet.com"},{"id":6,"firstName":"Ruthann","lastName":"Leslie","emailAddress":"Ruthann.Leslie@internet.com"},{"id":7,"firstName":"Cathee","lastName":"Leyla","emailAddress":"Cathee.Leyla@internet.com"}]');


// generalized filter function for different predicates 

// filter function
function filter(data, predicate){    
    // intialization of solution set
    let solution = [];

    // looping through to test each object
    for (let i = 0; i < data.length - 1; i++){
        if (predicate(data[i])){
            solution.push(data[i]);
        }
        
    }
    return solution;   
}

// findLast function
function findLast(data, predicate){
    let augmentedSet = filter(data, predicate);
    return augmentedSet[augmentedSet.length - 1];
}





