
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


 /* 
   Add your pseudocode here
 */

 /*
  Add written explanation of your solution here
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
