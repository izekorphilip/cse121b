/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers (){
    let add1 = Number(document.querySelector("#add1").value);
    let add2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(add1, add2);
}

document.querySelector("#addNumbers").addEventListener("click" , addNumbers);


/* Function Expression - Subtract Numbers */
function substract(number1, number2) {
    return number1 - number2;
}
function substractNumbers() {
    let substractNumber1 = Number(document.querySelector('#subtract1').value);
    let substractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = substract(substractNumber1, substractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', substractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    const multiplyNumber1 = parseFloat(document.getElementById('factor1').value);
    const multiplyNumber2 = parseFloat(document.getElementById('factor2').value);
    const product = multiply(multiplyNumber1, multiplyNumber2);
    document.getElementById('product').value = product;
}
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function division(number1, number2) {
    return number1 / number2;
}
function divideNumbers (){
    let division1 = Number(document.querySelector("#dividend").value);
    let division2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value= division(division1, division2);
}

document.querySelector("#divideNumbers").addEventListener("click" , divideNumbers);




/* Decision Structure */
let todayDate = new Date();
let currentYear = "";
currentYear = todayDate.getFullYear()
document.querySelector("#year").innerHTML = (currentYear);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = (numberArray);
/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = numberArray.filter((num) => num % 2 === 1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numberArray.filter((num) => num % 2 === 0);
/* Output Sum of Org. Array */
//const initialValue = 0;
document.querySelector("#sumOfArray").innerHTML = numberArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numberArray.map((x) => x * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numberArray.map((x) => x * 2) .reduce((sum, number) => sum + number);