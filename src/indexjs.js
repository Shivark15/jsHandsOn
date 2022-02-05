const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
const sum = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;
const quotient = 66 / 33;
let myVar = 87;

// Only change code below this line

myVar++;
let myVar = 11;

// Only change code below this line
--myVar;
const myDecimal = 5.7 ;
const product = 2.0 * 2.5;
const quotient = 4.4 / 2.0;
const remainder = 11%3;

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += c;
b += 9;
c += 7;

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *=10;

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 

const myStr = "This is the start. " + "This is the end.";

let myStr = "This is the first sentence.";
myStr += " This is the second sentence."

const myName = "shivam kumar";
const myStr = "Hello, our name is " + myName + ", how are you?";

const someAdjective = "my name is";
let myStr = "Learning to code is ";
 myStr+=someAdjective;

 let lastNameLength = 0;
const lastName = "Lovelace" ;
lastNameLength = lastName.length;

//Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// Setup
let myStr = "Jello World";

// Only change code below this line
 myStr = "Hello World";// Change this line
// Only change code above this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line

const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
// Only change code above this line
const myArray = ["string", 16];

const myArray = [["Bulls", 23], ["White Sox", 45]];

const myArray = [50, 60, 70];
var myData = myArray[0]

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
 myArray[0]=45;

 const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

  const myArray = [["John", 23], ["cat", 2]];

  // Only change code below this line
  
  myArray.push(["dog", 3]);

  const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
 const removedFromMyArray = myArray.pop() ;

 const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
 const removedFromMyArray = myArray.shift() ;

 const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

const myList = [["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15]];

function reusableFunction() 
{
  console.log("Hi World");
}
reusableFunction() ;

function functionWithArgs(one, two) {
    console.log(one + two);
  }
  functionWithArgs(7, 3);
  
  function timesFive(num) {
    return num * 5;
  }

  
  let myGlobal = 10;



function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;

}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
    // Only change code below this line
   var myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

  const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
    const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){

  sum=sum+5;
}

// Only change code above this line

addThree();
addFive();