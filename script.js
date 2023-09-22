// Assignment Code - assigns variable generateBtn the value of the "generate" button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//Declaring a new function named writePassword; inside that function we create a new variable "password", and set it equal to a function call for generatePassword(). Next we create a new variable "passwordText" and set it equal to the "password" textarea. Last we set the value of passwordText equal to password.

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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
function getCriteria() {
pwdLength = prompt("How many characters do you want in your password?", "Please enter a number between 8 and 128.");
  if (pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength)) {
    alert("Your password must be between 8 and 128 characters. Please try again.");
    getCriteria();
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
} //getCriteria end        
//Call getCriteria
getCriteria();

function getRandomCharacter(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

function mainLoop() {
  for (var i = 0; i < noOfCharacters+1; i++) {
    var randomString = (getRandomCharacter(possibleCharacters[i]));
  }
  console.log(randomString);
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// chosenOptions = [lowCase, upCase, numbers, specChar]  <- NEED TO CREATE FUNCTION TO MAKE THIS



// function createPassword() {
//   const passwordLength = 12;

//   const lowerCase = ['a', 'b', 'c', 'd'];
//   const upperCase = ['A', 'B', 'C', 'D'];
//   const numbers = ['1', '2', '3', '4', '5'];
//   const specials = ['!', '@', '#', '$'];

//   const selections = [lowerCase, upperCase, numbers, specials];

//   let password = ''; // Start with an empty string

//   for (let i = 0; i < passwordLength; i++) {
//     for (let j = 0; j < selections.length; j++) {
//       const character = selections[j][Math.floor(Math.random() * selections[j].length)]; // Pick a random character from the current selection
//       password += character; // Concatenate the character onto the 'password' string
//     }
//   }

//   console.log(password);
// }

console.log(pwdLength);
console.log(lowCase);
console.log(upCase);
console.log(numbers);
console.log(specChar);

// // The Fisher-Yates (aka Knuth) Shuffle:
// function shuffle(array) {
//   let currentIndex = array.length,  randomIndex;

//   // While there remain elements to shuffle.
//   while (currentIndex > 0) {

//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }
// var randomizedPossibleCharacters = shuffle(possibleCharacters);
// for (i = 0; i < noOfCharacters + 1; i++) {
//   randomizedPossibleCharacters[i];
// }


// var randInd = Math.floor(Math.random() * possibleCharacters.length+1);
// for (i = 0; i < pwdLength+1; i++) {
//   var randomPassword = possibleCharacters[randInd];
//   console.log(randomPassword);
// }

// function shuffle(possibleCharacters) {
  
// }
// for (i = 0; i < pwdLength.length+1; i++) {
//   var possiblePassword = randomizedPossibleCharacters[i];
//   console.log(possiblePassword);
// }


// function createRandomPassword() {
//   //Generate a random number within appropriate range
//   var randInd = Math.floor(Math.random() * possibleCharacters.length);
//   for (randInd = 0; randInd < pwdLength.length+1; randInd++) {
//     //Chooses a random character from possible characters
//     var passwordContents = possibleCharacters[randInd];
//     console.log(passwordContents);
//   }
// }
// createRandomPassword();


      // for (i = 0; i < guaranteedCharacters.length; i++) {
      //       getRandomCharacter(possibleCharacters);
      //       i = getRandomCharacter;
      //       return;
      // }

      // for (var i = 0; i < guaranteedCharacters.length; i++ ){
      //   result[i] = guaranteedCharacters[i]
        
      // }
    
//     characterChoices();
//       console.log(guaranteedCharacters);
  
  

//make totally random array of correct length first, sub in characters from guaranteedCharacters, use .include, maybe .splice or .pop to get others out?
//change criteria bit back to getCriteria, make var passwordCriteria => make keys equal vars in confirms

// for (let i = 0; i < pwdLength.length - guaranteedCharacters.length; i++) {
//   getRandomCharacter(possibleCharacters[i]);
  
// function generatePassword() {
//   
// }
//turn from array into a string






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
Follow same process for uppercase and numbers. For the special characters prompt, after the user input is stored in the object, IF there is at least one category of characters selected, the generate password function should trigger. IF NO category has been selected, it should display an alert that the user must choose at least one type of character to include, and go back to the beginning of the series of character prompts.

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

// need to assure that the newly created password has at least 1 character for each of the criteria selected
