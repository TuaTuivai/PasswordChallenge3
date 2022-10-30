// Assignment code here
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  return Math.floor(Math.random()*(max - min) + min)
}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)]
  }

function generatePassword() {

  var userinput = window.prompt("How many characters would you like to be")
 
  var passwordLength = parseInt(userinput)

  if (isNaN(passwordLength)) {
    window.alert("Sorry we were looking for a number")
  return
  }
 
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password has to be between 8 and 128 characters")
    return
  }

  var userwantsNumbers = window.confirm("Would you like numbers in generated password?")
  var userwantsSymbols = window.confirm("Would you like special characters in generated password?")
  var userwantsLowercase = window.confirm("Would you like lowercase characters in generated password?")
  var userwantsUppercase = window.confirm("Would you like uppercase characters in generated password?")

  var numberList = ["0,1,2,3,4,5,6,7,8,9"]
  var symbolList = ["!,@,#,$,%,^,&,*"]
  var lowercaseList = ["abcdefghijklmnopqrstuvwxyz"]
  var uppercaseList = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

  var optionsCart = []

  if (userwantsNumbers === true) {
    optionsCart.push(numberList)
  }

  if (userwantsSymbols === true) {
    optionsCart.push(symbolList)
  }

  if (userwantsLowercase === true) {
    optionsCart.push(lowercaseList)
  }

  if (userwantsUppercase === true) {
    optionsCart.push(uppercaseList)
  }

  var generatedPassword = ""

  for (var i = 0; 1 < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomCharacter = getRandomItem(randomList)
    console.log(randomCharacter)
  }

  // var randomNumber = Math.floor(Math.random()* 128)

  // var password= '';
  // for(var i=0; i < numberList; i++) {
  //   console.log(Math.floor(math.random() * 2))}

  // for(var i=0; i < symbolList; i++) {
  //   console.log(Math.floor(math.random() * 2))}
  
  // for(var i=0; i < lowercaseList; i++) {
  //   console.log(Math.floor(math.random() * 2))}

  // for(var i=0; i < uppercaseList; i++) {
  //   console.log(Math.floor(math.random() * 2))}S
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
