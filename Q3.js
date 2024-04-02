//function that takes an array of numbers and returns only prime numbers from the original array
//defining our function

function genPrime(numbers) {

    let emptyArray = [];
    for (let i = 0; i < numbers.length; i++) {
      let prime = true;
      
      for (let j = 2; j < numbers[i]; j++) {
        if (numbers[i] % j === 0) {
          prime = false;
          break; 
        }}


      if (prime && numbers[i] > 1) {
       
        emptyArray.push(numbers[i]);
      }
    }
    return emptyArray; 
  }
  
  console.log(genPrime([1, 2, 3, 4, 5, 6, 7, 8, 9]));