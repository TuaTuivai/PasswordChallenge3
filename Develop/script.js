// Assignment code here
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if(!max) {
    max = min
    min = 0
  }
  // random sets up to obtain a random character within the string
  var random = Math.random()
  return Math.floor(min * (1 - random) + random*max)
}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)]
  }

function generatePassword() {

  var userinput = window.prompt("How many characters would you like to be")
 
  var passwordLength = parseInt(userinput)
// if statement will return user back to main window if password does not meeet standards
  if (isNaN(passwordLength)) {
    window.alert("Sorry we were looking for a number")
  return
  }
 
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password has to be between 8 and 128 characters")
    return
  }
// created window confirmation to obtain user choice in generating a new password
  var userwantsNumbers = window.confirm("Would you like numbers in generated password?")
  var userwantsSymbols = window.confirm("Would you like special characters in generated password?")
  var userwantsLowercase = window.confirm("Would you like lowercase characters in generated password?")
  var userwantsUppercase = window.confirm("Would you like uppercase characters in generated password?")
// created a list of possible choices to run for generated password
  var numberList = ["0","1","2","3","4","5","6","7","8","9"]
  var symbolList = ["!","@","#","$","%","^","&","*"]
  var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseList = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// created a grablist to combine user choices from Lists of strings
  var grabList = []

  if (userwantsNumbers === true) {
    grabList.push(numberList)
  }

  if (userwantsSymbols === true) {
    grabList.push(symbolList)
  }

  if (userwantsLowercase === true) {
    grabList.push(lowercaseList)
  }

  if (userwantsUppercase === true) {
    grabList.push(uppercaseList)
  }
  // created safety net if user chooses to opt out of selecting from list of strings for generated code and will automatically select from symbol list
  if (grabList.length === 0 ) {
    grabList.push(symbolList)
  }
  // Generated password variable collects users selecttion of strings for random password
  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(grabList)
    var randomCharacters = getRandomItem(randomList)
    generatedPassword += randomCharacters
  }
  // allows for password to be created and returned on to website
return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
