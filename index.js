// Iteration 1: Names and Input
const hacker1 = "Miguel";
console.log("The driver's name is" + " " + hacker1);

const hacker2 = "Janos";
console.log("The navigator's name is" + " " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
  }
  else if (hacker1.length<hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has" + hacker2.length + "characters.")
  }
  else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
  }
// Iteration 3: Loops
let nameSpacedAndCapitalized = "";
for (let i =0; i < hacker1.length; i += 1) {
  nameSpacedAndCapitalized += hacker1[i].toUpperCase() + " ";
}
console.log(nameSpacedAndCapitalized);

let reversedNavigatorsName = "";
for (let i = hacker2.length -1; i>=0; i--) {
  reversedNavigatorsName += hacker2[i];
}
console.log(reversedNavigatorsName);

let lexicographicOrder = hacker1.localeCompare(hacker2);
for (let i = 0; i < lexicographicOrder; i++) {
  if (lexicographicOrder === -1) {
    console.log("The driver's name goes first.");
  }
  else if (lexicographicOrder === 1) {
    console.log("Yo, the navigator goes first definitely.");
  }
  else {
    console.log("What?! You both have the same name?");
  }
}

// Bonus 1
let longText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id tristique diam, in volutpat tellus. Cras at leo gravida, lobortis lectus pulvinar, finibus tellus. Nunc arcu libero, porttitor sed facilisis in, malesuada et eros. Donec dapibus tempor nisl a mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vel dui et nunc cursus malesuada eget accumsan diam. Donec vel libero sed sapien luctus tempor. Duis gravida eu diam eget sollicitudin. Cras scelerisque feugiat mi ut dapibus. Nam maximus urna at erat blandit, nec ultricies justo iaculis. Curabitur fringilla magna sit amet ligula sollicitudin vehicula. Donec blandit ante sed magna fermentum malesuada. Praesent ut nisl rutrum, finibus ex ut, pulvinar metus. Aenean mi nunc, bibendum sed erat et, laoreet elementum massa. Curabitur fringilla odio nec metus vehicula, eu ornare purus ullamcorper. Nunc maximus lobortis tellus.Suspendisse orci libero, malesuada vitae blandit et, sagittis cursus magna. Aenean ullamcorper lacus dolor, id fringilla lorem condimentum vitae. Etiam varius fringilla lacus vitae congue. Nulla libero nulla, porta ut suscipit laoreet, dapibus non risus. Phasellus suscipit congue lorem, a blandit libero commodo id. Ut vel tortor elit. Donec faucibus urna non fringilla hendrerit. Nunc sit amet mauris nisi. Aliquam quis dui ut mauris elementum vulputate a at turpis.Nulla facilisi. Nullam quam libero, mattis congue lacinia tempus, interdum sed erat. Nulla porttitor, mi eu vestibulum maximus, nibh lorem dictum metus, id condimentum purus nibh sit amet velit. Donec vel mollis dui. Donec imperdiet lacinia scelerisque. Pellentesque ut ex magna. Donec non pulvinar nulla, eget interdum sapien. Nullam egestas velit sed faucibus volutpat. Curabitur purus ipsum, pretium eu venenatis non, placerat consectetur ipsum. Proin vulputate rutrum arcu at pulvinar."

let wordCount = 1;
for (let i= 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    wordCount++;
  }
}
console.log(wordCount);

let etCount = 0;
for (let i= 0; i < longText.length; i++) {
  if (longText[i] === "e" && longText[i+1] === "t") {
    etCount++;
  }
}
console.log(etCount);
/* I know this doesn't work properly, it counts every 'et' in every word, but I'm not sure how to fix it. */

//Bonus 2
const phraseToCheck = "Indul a görög aludni";
const lowerCasePhrase = phraseToCheck.toLowerCase();
let isPalindrome = true;

const middleIndex = (lowerCasePhrase.length / 2) | 0;

for (let i = 0; i < middleIndex; i++) {
  if (lowerCasePhrase[i] !== lowerCasePhrase[lowerCasePhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome);
/*Okay this also doesn't work because it's more than 1 word. 
If I replace the string with a single word it works.*/