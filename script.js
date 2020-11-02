var generateBtn = document.querySelector("#generate");
var charLowerCase = "abcdefghijklmnopqrstuvwxyz";
var charUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSpecial = "!@#$%^&*()_+"
var charNumber = "0123456789"

function writePassword(event) {
  event.preventDefault();
  
  var amountPrompt = prompt('How many characters long?(8-128)');
if (amountPrompt >= 8 && amountPrompt <= 128){
  console.log(amountPrompt);
}
else {
  alert('Invalid amount of characters.');
  return writePassword();
}

var lowerCasePrompt = confirm('Would you like to use lowercase letters?');
if (lowerCasePrompt === true){
  var lowerCasePrompt = charLowerCase;
}
else {
  var lowerCasePrompt = '';
}

var upperCasePrompt = confirm('Would you like to use uppercase letters?');
if (upperCasePrompt === true){
  var upperCasePrompt = charUpperCase
}
else {
  var upperCasePrompt = '';
}

var specialPrompt = confirm('Would you like to use special characters?');
if (specialPrompt === true){
  var specialPrompt = charSpecial 
}
else {
  var specialPrompt = '';
}

var numberPrompt = confirm('Would you like to use numbers?');
if (numberPrompt === true) {
  var numberPrompt = charNumber;
}
else {
  var numberPrompt = '';
}
  
  allChars = lowerCasePrompt + upperCasePrompt + specialPrompt + numberPrompt
 
  var passwordText = document.querySelector("#password");

  var password = "";

for (var i = 0; i < amountPrompt; i++) {
  password = password + allChars.charAt(Math.floor(Math.random() * Math.floor(allChars.length - 1)));
}

  passwordText.value = password;

  console.log(password)
  console.log(passwordText)
}


generateBtn.addEventListener("click", writePassword);

