// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.



function solution(inputArray) {
    let number = (inputArray[0]* inputArray[1])
    for(let i=0; i<inputArray.length-1; i++) {
       
      if (inputArray[i]* inputArray[i+1] > number) {
        number = inputArray[i]* inputArray[i+1] 
      }
    }
    return number
  }