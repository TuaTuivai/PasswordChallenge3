// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
 var userinput= window.prompt("How many characters would you like to be")
  // console.log(userinput)
  var passwordlength = parseInt(userinput)

  if (isNaN(passwordlength)) {
    window.alert("Sorry we were looking for a number")
    return
  }

  if (passwordlength < 8 || passwordlength > 128) {
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

  
  var randomNumber = Math.floor(Math.random()* 128)

  var password= '';
  for(var i=0; i < numberList; i++) {
    console.log(Math.floor(math.random() * 2))
  }
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
