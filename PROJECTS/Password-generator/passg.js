
// slider info
const inputSlider = document.querySelector("[data-lengthSlider]")

// length display
const dataLength = document.querySelector("[data-length]")

//copy data button
const copyBtn = document.querySelector("[data-copy]")
const copyMsg = document.querySelector("[data-copyMsg]")

//password display
const pDisplay = document.querySelector("[data-password-display]")

// checkboxes info
const uppercaseCheck = document.querySelector("#uppercase")
const lowercaseCheck = document.querySelector("#lowercase")
const numbersCheck = document.querySelector("#numbers")
const symbolsCheck = document.querySelector("#symbols")

//generate password btn
const generateBtn = document.querySelector(".generate-button")

//data indicator with strength
const indicator1 = document.querySelector(".circle1")
const indicator2 = document.querySelector(".circle2")
const indicator3 = document.querySelector(".circle3")

//all checkbox
const allCheckBox = document.querySelectorAll("input[type=checkbox]")

// creating a string having all the symbols
const symbolString = "!@#$%^&*()_-+={}[]|;:'\",.<>?/\\`~";


let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
setIndicator1("#ccc");
setIndicator2("#ccc");
setIndicator3("#ccc");

 //setting password length
 function handleSlider(){
    inputSlider.value = passwordLength;
    dataLength.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize =
      ((passwordLength - min) * 100) / (max - min) + "% 100%";
}


 //setting indicator
 function setIndicator1(color) {
    indicator1.style.backgroundColor = color;
    indicator1.style.boxShadow = `0px 0px 12px 1px ${color}`;
 }
 function setIndicator2(color) {
   indicator2.style.backgroundColor = color;
   indicator2.style.boxShadow = `0px 0px 12px 1px ${color}`;
}
function setIndicator3(color) {
   indicator3.style.backgroundColor = color;
   indicator3.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

 // generating random interger
 function getRndInteger(min,max) {
   return  Math.floor(Math.random() * (max - min)) + min;
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

 //calculating password strength
function calcStrength() {
   let hasUpper = false;
   let hasLower = false;
   let hasNum = false;
   let hasSym = false;
 if (uppercaseCheck.checked) hasUpper = true;
 if (lowercaseCheck.checked) hasLower = true;
 if (numbersCheck.checked) hasNum = true;
 if (symbolsCheck.checked) hasSym = true;
 
 if(hasUpper && hasLower &&(hasNum || hasSym) && passwordLength >=8) {
   setIndicator1("#0f0");
   setIndicator2("#0f0");
   setIndicator3("#0f0");
 } else if ((hasLower || hasUpper) && (hasNum || hasSym ) && passwordLength >=6){
   setIndicator1("#ff0");
   setIndicator2("#ff0");  
   setIndicator3("#ccc");          
 }
 else {
   setIndicator1("#f00");
   setIndicator2("#ccc");
   setIndicator3("#ccc");
 }
}

//copying on clipboard using API
async function copyContent() {
  try {
   await navigator.clipboard.writeText(pDisplay.value);
   copyMsg.innerText = "copied";
  }
  catch(e){
     copyMsg.innerText = "failed";
  }
  //to make copied msg visible
  copyMsg.classList.add("active");
  setTimeout( () => {
   copyMsg.classList.remove("active");
  },2000);
}


//shuffle password
 function shufflePassword(array) {
   //fisher yates method
   for(let i = array.length - 1; i>0; i--){
      const j = Math.floor(Math.random() * (i+1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }
   let str = "";
   array.forEach((el) => (str += el));
   return str;
 }

//event listener for all (expect generate password)

inputSlider.addEventListener('input',(e) => {
   passwordLength = e.target.value;
   handleSlider();
})
 
copyBtn.addEventListener('click',() => {
   if(pDisplay.value)
   copyContent();
});


function handleCheckBoxChange() {
   checkCount = 0;
   allCheckBox.forEach( (checkbox) => {
      if(checkbox.checked)
      checkCount++;
   });

   //special condition when all boxes are checked and password length is less then checkCount
   if(passwordLength < checkCount) {
      passwordLength = checkCount;
      handleSlider();
   }
}
allCheckBox.forEach((checkbox) => {
   checkbox.addEventListener('change', handleCheckBoxChange);
})


//generate password
 generateBtn.addEventListener('click',() => {
   //none of the checkbox are selected
   if(checkCount ==0)
    return;

   if(passwordLength < checkCount)
   passwordLength = checkCount;
   handleSlider();

   //let's start the journey to find new password
   // remove old password
   password = "";

   let funcArr = [];

   if(uppercaseCheck.checked)
   funcArr.push(generateUpperCase);
   
   if(lowercaseCheck.checked)
   funcArr.push(generateLowerCase);
   
   if(numbersCheck.checked)
   funcArr.push(generateRandomNumber);
   
   if(symbolsCheck.checked)
   funcArr.push(generateSymbol);
 

   // compulsory addition
   for(let i=0;i<funcArr.length;i++){
      password += funcArr[i]();
   }

   // remaining addition
for (let i = 0; i < passwordLength - funcArr.length; i++) {
   let randIndex = getRndInteger(0, funcArr.length);
   let selectedFunc = funcArr[randIndex];
   
   if (typeof selectedFunc === 'function') {
      password += selectedFunc();
   }
}


   // shuffle the password
   password = shufflePassword(Array.from(password));

   // show the UI
   pDisplay.value = password;

   // calculate strength
    calcStrength();


 })

