const screen = document.getElementById("screen");
const numberButtons = document.querySelectorAll(".numbers");
const actionButtons = document.querySelectorAll(".action");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const decimalButton = document.getElementById("decimal");
const changePosNeg = document.getElementById("plus-minus");
const percent = document.getElementById("percent");
const deleteButton = document.getElementById("delete");

let first = 0;
let second = 0;
let answer = 0;
let decimal = false;
let setFirst = true;
let setSecond = false;
let operator = 0;

updateScreen();





for(let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', appendNumber);
}
for(let j = 0; j < actionButtons.length; j++) {
    actionButtons[j].addEventListener('click', setOperator);
}

decimalButton.addEventListener('click', addDecimal);
clear.addEventListener('click', clearScreen);
equals.addEventListener('click', updateAnswer);
changePosNeg.addEventListener('click', changeSign);
percent.addEventListener('click', toPercentage);
deleteButton.addEventListener('click', deleteNum);


function deleteNum() {
    let temp = " ";
    if (setFirst) {
        temp = screen.textContent;
        temp = temp.slice(0,-1);
        first = temp;
        screen.textContent = first;
    } else if (setSecond) {
        temp = screen.textContent;
        temp = temp.slice(0, -1);
        second = temp;
        screen.textContent = second;
    }
}



function toPercentage() {
    console.log(first + second);
    let temps = parseFloat(screen.textContent);
    temps /= 100;
    screen.textContent = temps.toString();
    if (setFirst) {
        first = parseInt(temps);
        setFirst = false;
        setSecond = true;
    } else if (setSecond) {
        second = parseInt(temps);
       
    }
    console.log(first + second);
}

function changeSign() {
    let temps = parseFloat(screen.textContent);
    temps *= -1; 
    screen.textContent = temps;
}

function clearScreen() {
    screen.textContent = 0;
    first = 0;
    second = 0;
    answer = 0;
    setFirst = true;
    setSecond = false;
    operator = 0;
    decimal = false;
}

function addDecimal() {
    if(!decimal) {
        if(setFirst && !setSecond) {
            first += ".";
            screen.textContent = first;
            decimal = true;
        } else if (!setFirst && setSecond) {
            second += ".";
            screen.textContent = second;
            decimal = true;
        }
    }
}

function appendNumber() {
    if (setFirst) {
        if(first === "0" || first === 0) {
            first = this.textContent;
            screen.textContent = first;
        } else {
            first += this.textContent;
            screen.textContent = first;
        }
    } if (setSecond) {
        if(second === "0" || second === 0) {
            second = this.textContent;
            screen.textContent = second;
        } else  {
            second += this.textContent;
            screen.textContent = second;
        }
    }
}

function setOperator(){
    operator = this.textContent;
    setFirst = false;
    setSecond = true;
    decimal = false;
}

function setNumber(){
    let num = this.textContent;
    screen.textContent = num;
}


function add(a, b) {
    return a + b;
}

function subtract (a, b) {
     return a - b;
}
function multiply(a, b){
    return a * b;
}

function divide(a, b) {
    if(b == 0) {
        return "NOPE!";
    }
    return a / b;
}

function updateScreen() {
    screen.textContent = answer;
}

function updateAnswer() {
    first = parseFloat(first);
    second = parseFloat(second);
    switch(operator) {
        case "+":
            answer = add(first, second);
            break;
        case "-":
            answer = subtract(first, second);
            break;
        case "x":
            answer = multiply(first, second);
            break;
        case "/":
            answer = divide(first, second);
            break;
    }
    screen.textContent = answer;
    first = answer;
    second = 0;
    operator = 0;
    decimal = false;
    answer = 0;
}

function test() {
    console.log("setfirst: " + setFirst + " set 2: " + setSecond);

    console.log("first: " + first + " second: " + second);

}
test();