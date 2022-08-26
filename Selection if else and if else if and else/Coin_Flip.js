
function coinFlip() {
  let result = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
  if (result) {
    console.log("Heads");
  } else console.log("Tails");
}

coinFlip();