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


var lowCase;
var upCase;
var numbers;
var specChar;

//Maybe (probably?) need to rename the following generatePassword()



function passCriteria() {
var pwdLength = prompt("How many characters do you want in your password?", "Please enter a number between 8 and 128.");
  if (pwdLength < 8 || pwdLength > 128 || "") {
    alert("Your password must be between 8 and 128 characters. Please try again.");
    passCriteria();
  } else {
    function characterChoices(){
      var lowCaseChoice = prompt("Would you like to include lowercase letters? Y/ N").toUpperCase();
      if (lowCaseChoice.startsWith("Y")) {
        lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      } else {
        lowCase = null;
      }
      var upCaseChoice = prompt("Would you like to include uppercase letters? Y/N").toUpperCase();  
      if (upCaseChoice.startsWith("Y")) {
        upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      } else {
        upCase = null;
      }
      var numberChoice = prompt("Would you like to include numbers? Y/N").toUpperCase();
      if (numberChoice.startsWith("Y")) {
        numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      } else {
        numbers = null;
      }
      var specCharChoice = prompt("Would you like to include special characters? Y/N").toUpperCase();
      if (specCharChoice.startsWith("Y")) {
        specChar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', ']', '}', '<', '>', '?'];
        createPassword();
      } else {
        specChar = null;
        createPassword();
      }
      
    }
      
  }
    characterChoices();
    function createPassword() {
      if ((lowCase === null) && (upCase === null) && (numbers === null) && (specChar === null)) {
        alert("You must include at least one type of character.");
        characterChoices();
      } else {
        
      }
    
  }
}

passCriteria();
console.log(lowCase);
console.log(upCase);
console.log(numbers);
console.log(specChar);

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