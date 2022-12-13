
function tracedbackString(char) {
  {
  const charArray = char.split("");
  // Here we are reversing the array
  const tracedbackcharArray = charArray.reverse();
  const tracedbackchar = tracedbackcharArray.join("");
  return tracedbackchar;
  
}
}
function isPalindrome(char) {
  const tracedbackchar = tracedbackString(char);

  if (char === tracedbackchar) {
    return true;

  } else {
    return false;
  }
}
  // Write your algorithm here
/* 1. Initialize a function called tracebackString(char)
   2. Define a variable charArray = charsplit("")
   3. Reverse the array
   4. Initialize the function Palindrome which receives a string as an argument
   5. Use the if statements to achieve the aim


 /* 
   //Add your pseudocode here
   declare a function called tracedbackString
   Initialize an array tracedbackArray = charArray.reverse();
   iterate over each item in the array
   if the character is tracedback return result, if it isn't teturn otherwise.
 */ 


  /*Add written explanation of your solution here
  After Iterating over each item in the array, if the item is a palindrome it returns true,
  if it is not a palindrome it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
