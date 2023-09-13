function isPalindrome(word) {
  // Write your algorithm here

    word = word.replace(/[^a-z]/g, '').toLowerCase();
    
    let left = 0;
    let right = word.length - 1;
  
    while (left < right) {
      if (word[left] !== word[right]) {
        return false; // Not a palindrom
      }
      left++;
      right--;
    }
  
    return true; 
  }
  
  

/* 
  Add your pseudocode here
  function isPalindrome(word):
    // Step 1: Remove non-letter characters and convert to lowercase
    word = replace non-letter characters with empty string in word
    word = convert word to lowercase

    // Step 2: Initialize pointers 'left' and 'right' at the beginning and end of the word
    left = 0
    right = length of word - 1

    // Step 3: Compare characters from both ends toward the center
    while left is less than right:
        if word[left] is not equal to word[right]:
            return false  // Not a palindrome
        left = left + 1
        right = right - 1

    // Step 4: If the loop completes without finding any unequal pairs, return true (it's a palindrome)
    return true

*/

/*
  Add written explanation of your solution here
  My code contains  a function called "isPalindrome" to check if a word reads the same forwards and backwards. It does this by removing non-letter characters and converting the word to lowercase for fair comparison. It then uses two pointers, left and right, which start at the ends and move towards the middle to compare characters. If they ever find different characters, the function says it's not a palindrome (false). If the pointers make it through the entire word without finding differences, it's a palindrome (true). This code works well for lowercase letters-only strings and efficiently checks for palindromes
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
