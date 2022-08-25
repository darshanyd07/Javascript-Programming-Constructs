
function randomNumberGenerator()
 {
  return (randomNumber = Math.floor(Math.random() * (99 - 10 + 1)) + 10);
}


function sumOfRandoms() 
{
    
var sum = 0;
  for ( var i = 1; i <= 5; i++)
   {
    let number = randomNumberGenerator();
    console.log(number);
    sum += number;
  }
  return sum;
}

sum = sumOfRandoms();

console.log("Sum of Five random numbers: " + sum);
console.log("Average of these numbers: " + sum / 5);