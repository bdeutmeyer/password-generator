// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  return "password";
  }
  
// Clipboard of things to maybe copy/paste in future

var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var wantNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specChar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', ']', '}', '<', '>', '?'];


// var pwdLength;
// var lowCase;
// var upCase;
// var wantNumbers;
// var specChar;


/* The button needs to trigger a prompt that asks the user how many characters they'd like their password and state the range of characters allowed. 
  -IF the user puts in a number less than 8 or greater than 128, THEN another prompt should reiterate the length criteria.
  -WHEN the user puts in a number between 8 and 128, THEN that user input should be stored in an object, and the lowercase prompt should trigger.
The lowercase prompt asks the user if they would like to include lowercase letters (Y/N).
  -WHEN the user puts in a y or n in response (how to allow for casing/whole word vs initial variance??), THEN that user input should be stored in an object, and the uppercase prompt should trigger.
Follow same process for uppercase and numbers. For the special characters prompt, after the user input is stored in the object, the generate password function should trigger.

To generate the password, the computer will need to iterate through all the possible choices, choosing random characters and including at least one choice from each of the conditions specified by the user, until the desired number of characters is reached. The computer will then need to spit out the randomly generated password. 
  */

//FROM DOM:
//create a function to take in all the password criteria
	//prompt user for length of password and save it as a variable
	//validate user input - check to make sure the length is between 8-128 char
	//confirm lowercase, uppercase, numeric, and special char
	//validate that one of the above 4 options has been selected
	//create object to store user input

//create separate global arrays for each of 4 confirmations (upper, lower, numbers, special)

//inside generatePassword function
	//create a variable to store user input from the password option function
	//create a new array that will take in all possible characters from all arrays
	//create conditional statements to push into possible character array…i.e. If the user selected lowercase, we will need to push those elements in the lowercase array into possible character array
	//loop through possible character array and return characters based on the length given by the user (math.random math.floor to choose index?)
//return result and pass to be generated on the page

//need to assure that the newly created password has at least 1 character for each of the criteria selected…