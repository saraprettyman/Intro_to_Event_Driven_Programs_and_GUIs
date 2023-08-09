// Initialization of Mortgage variables
const loan_amount = document.getElementById("loan_amount");
const rate = document.getElementById("rate");
const years = document.getElementById("years");
const payments = document.getElementById("payments");
const mortgage = document.getElementById("mortgage");

loan_amount.addEventListener("blur", () => {
    // checking entry validity, calculating payment
    if (isNaN(parseFloat(loan_amount.value))){
        payments.innerHTML = `Error occured. Invalid input`;
    }else{
        showPayments();
    }
});

rate.addEventListener("blur", () => {
    // checking entry validity, calculating payment
    if (isNaN(parseFloat(rate.value))){
        payments.innerHTML = `Error occured. Invalid input`;
    }else{
        showPayments();
    }
});

years.addEventListener("blur", () => {
    // checking entry validity, calculating payment
    if (isNaN(parseFloat(years.value))){
        payments.innerHTML = `Error occured. Invalid input`;
    }else{
        showPayments();
    }
});


function showPayments() {
    // setting default values
    if (loan_amount.value === ""){
        loan_amount.value = 340000;}
    if (rate.value === ""){
        rate.value = 5.5;}
    if (years.value === ""){
        years.value = 30;
    }
    const n = (years.value)*12;
    const mrate = (rate.value/100)/12;
    const num = loan_amount.value*(mrate)*Math.pow(1+mrate, n);
    const den = Math.pow(1+mrate, n)- 1;
    const monthly = (num/den);
    payments.innerHTML = `Monthly Payments: $${monthly.toFixed(2)}`;
    console.log(`mrate ${mrate} num ${num} den ${den} monthly ${monthly}`);
}
