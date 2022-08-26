const prompts = require("prompt-sync")();

let number = parseInt(prompts("Enter a number between One to Nine: "));
console.log("Number = " + number);
switch (number) {
    case 1:
        {
            console.log("Number in Words = ONE");
        }

    case 2:
        {
            console.log("Number in Words = Two");
        }

    case 3:
        {
            console.log("Number in Words = Three");
        }

    case 4:
        {
            console.log("Number in Words = Four");
        }
    case 5:
        {
            console.log("Number in Words = Five");
        }
    case 6:
        {
            console.log("Number in Words = Six");
        }

    case 7:
        {
            console.log("Number in Words = Seven");
        }
    case 8:
        {
            console.log("Number in Words = Eight");
        }

    case 9:
        {
            console.log("Number in Words = Nine");
        }

}

