// Assignment Code - assigns variable generateBtn the value of the "generate" button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//Declaring a new function named writePassword; inside that function we create a new variable "password", and set it equal to a function call for generatePassword(). Next we create a new variable "passwordText" and set it equal to the "password" textarea. Last we set the value of passwordText equal to password.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//inside generatePassword function
	//create a variable to store user input from the password option function
	//create a new array that will take in all possible characters from all arrays
	//create conditional statements to push into possible character array…i.e. If the user selected lowercase, we will need to push those elements in the lowercase array into possible character array
	//loop through possible character array and return characters based on the length given by the user (math.random math.floor to choose index?)
//return result and pass to be generated on the page

//Starter code above, my code below
var noOfCharacters;
var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specChar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', ']', '}', '<', '>', '?'];
var possibleCharacters = [];
var guaranteedCharacters = [];
var includedCharacters = '';

//Begin by making sure password length is in correct range.
function generatePassword() {
pwdLength = prompt("How many characters do you want in your password?", "Please enter a number between 8 and 128.");
  if (pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength)) {
    alert("Your password must be between 8 and 128 characters. Please try again.");
    generatePassword();
  } else {
    noOfCharacters = pwdLength;
    characterChoices();
  }
  //Function that can be repeated if no characters have been chosen
  function characterChoices(){
    //Confirmation boxes to produce boolean answer about each
    var hasLowCase = confirm("Would you like to include lowercase letters?");
    var hasUpCase = confirm("Would you like to include uppercase letters?");      
    var hasNumbers = confirm("Would you like to include numbers?"); 
    var hasSpecChar = confirm("Would you like to include special characters?");
    // Check to make sure that at least one category of characters has been chosen, loop back to beginning of characterChoices function if not.    
    if (!hasLowCase && !hasUpCase && !hasNumbers && !hasSpecChar) {
        alert("You must choose at least one type of character. Please try again.");
        characterChoices();
    } else {
      // Conditionals: if above returns true, then the corresponding array gets concatenated into the possibleCharacters array, AND a random character from that corresponding array gets chosen and pushed into the guaranteedCharacters array.
      if (hasLowCase) {
        possibleCharacters = possibleCharacters.concat(lowCase);
        guaranteedCharacters.push(getRandomCharacter(lowCase));
      }
      if (hasUpCase) {
        possibleCharacters = possibleCharacters.concat(upCase);
        guaranteedCharacters.push(getRandomCharacter(upCase));
      }
      if (hasNumbers) {
        possibleCharacters = possibleCharacters.concat(numbers);
        guaranteedCharacters.push(getRandomCharacter(numbers));
      }
      if (hasSpecChar) {
        possibleCharacters = possibleCharacters.concat(specChar);
        guaranteedCharacters.push(getRandomCharacter(specChar));
      }
    } //big else end
  } //characterChoices end  
var password = '';
for (var i = 0; i < noOfCharacters; i++) {
  password += getRandomCharacter(possibleCharacters);
}
return password;
} //generatePassword end        


function getRandomCharacter(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}