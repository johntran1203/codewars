// Given the string, check if it is a palindrome.

// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.

function solution(word) {
    let wordOne = ''
    let wordTwo = ''
    for(let i=0;i<word.length; i++) {
    wordOne += word[i]
  }
  
  for(let i=word.length-1;i>=0; i--) {
    wordTwo += word[i]
  }
    return wordTwo == wordOne
  }