// slider info
const inputSlider = document.querySelector("[data-lengthSlider")

// length display
const dataLength = document.querySelector("[data-length]")

//copy data button
const copyBtn = document.querySelector("[data-copy]")
const copyMsg = document.querySelector("[data-copyMsg]")

//password display
const pDisplay = document.querySelector(".display")

// checkboxes info
const uppercaseCheck = document.querySelector("#uppercase")
const lowercaseCheck = document.querySelector("#lowercase")
const numbersCheck = document.querySelector("#numbers")
const symbolsCheck = document.querySelector("#symbols")

//generate password btn
const generateBtn = document.querySelector(".generate-button")

//data indicator with strength
const indicator = document.querySelector(".circle")

//all checkbox
const allCheckBox = document.querySelectorAll("input[type=checkbox]")

// creating a string having all the symbols
const symbolString = "!@#$%^&*()_-+={}[]|;:'\",.<>?/\\`~";


let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider()
 //setting password length
 function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
 }

 //setting indicator
 function setIndicator(color) {
    indicator.style.backgroundColor = color;
 }

 // generating random interger
 function getRndInteger(min,max) {
    Math.floor(Math.random() * (max - min)) + min;
 }

 // generating random number
 function generateRandomNumber(){
    return getRndInteger(0, 9);
 }

 //generating lowercase
 function generateLowerCase() {
    return String.fromCharCode(getRndInteger(97, 123));
 }

 //generating uppercase
 function generateUpperCase() {
    return String.fromCharCode(getRndInteger(65, 91));
 }

 //generating random symbols
 function generateSymbol() {
    const randNum = getRndInteger(0, symbolString.length);
    return symbolString.charAt(randNum);
 }