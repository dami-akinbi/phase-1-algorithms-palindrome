function isPalindrome(word) {
  // Write your algorithm here
  const wordReverse = word.split("").reverse().join("");
  return wordReverse.localeCompare(word) === 0 ? true : false;
}
// Raw Practice
// let word = "Damilola!";
// word = "race";
// word = "racecar";
// word = "madam";
// let wordReverse = word.split("").reverse().join("");
// wordReverse.localeCompare(word) === 0 ? console.log(true) : console.log(false);
// return wordReverse.localeCompare(word) === 0 ? true : false;

/**
 * Add your pseudocode here
 *
 * Split up the string into an array, using split()
 * Reverse the array completely, using reverse()
 * Collapse the array into a string, using join()
 * Compare both the string and the reversed copy together, using localeCompare()
 * return true is comparison result is 0, return else otherwise
 */

/**
 * Add written explanation of your solution here
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
