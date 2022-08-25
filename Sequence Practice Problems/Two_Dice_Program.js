
 function roll() 
 {
    return (rollResult = Math.round(Math.random() * 6 - 1 + 1) + 1);
  }

  let diceOneResult = roll();
  let diceTwoResult = roll();

  let sum = diceOneResult + diceTwoResult;

  console.log(diceOneResult);
  console.log(diceTwoResult);
  console.log(sum);
