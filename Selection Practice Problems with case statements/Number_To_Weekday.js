const prompts = require("prompt-sync")();

const number = parseInt(prompts("Enter a number between One to Seven: "));
console.log(number);
function numberToWeekday(number) 
{
    switch (number) {
        case 1:
            {
                console.log("Monday");
            }
    
        case 2:
            {
                console.log("Tuesday");
            }
    
        case 3:
            {
                console.log("Wednesday");
            }
    
        case 4:
            {
                console.log("Thursday");
            }
        case 5:
            {
                console.log("Friday");
            }
        case 6:
            {
                console.log("Saturday");
            }
    
        case 7:
            {
                console.log("Sunday");
            }
        }
}
let weekDay = numberToWeekday(number);
console.log(weekDay);