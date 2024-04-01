//function accepting two numbers to generate array btn them

function genArray(num1, num2) {
    //lets have a blank array
    const array = [];
    //i will be first index
    for (let i = num1; i <= num2; i++) 
        {array.push(i)}

    return array;
}

//executing our funtion
console.log (genArray(0, 5))
console.log (genArray(-8, -2)) 




