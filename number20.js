let activity = "boating";
let why = "";

// Ask user why
// Give user options; bored, thrill, stressed
// ... info given from user through web form

let response = "bored";

switch (response) {
    case "bored":
        // execute bored code here
        console.log ("You selected bored" );
        break;
    case "thrill":
        // execute thrill code here
        console.log ("You selected thrill");
        break;
    case "stressed":
        // execute stressed code here
        console.log ("You selected stressed");
        break;
    default:
        console.log ("You did not select a correct option, try again");
        break;
    
    // begin executing after switch
}
console.log ("Out of switch, back to normal execution...");

// Expected results "You selected bored" and "Out of switch back to normal execution" 
/*After the "You selected bored string" the program at "break;" gets out the switch statement 
without attempting to evaluate the remaining statement and executes the final
console.log of the program*/ 

// Below is an intentional misspelling to force the default part of the statment to execute
response = "thirll";

switch (response) {
    case "bored":
        // execute bored code here
        console.log ("You selected bored" );
        break;
    case "thrill":
        // execute thrill code here
        console.log ("You selected thrill");
        break;
    case "stressed":
        // execute stressed code here
        console.log ("You selected stressed");
        break;
    default:
        console.log ("You did not select a correct option, try again");
        break;
    
    // begin executing after switch
}
console.log ("Out of switch, back to normal execution...");

/* Expected results "You did not select a correct option, try again" and 
"Out of switch back to normal execution"
One of three options in the switch statement therefore it went the default and
then to final console.log stating the user is out of the switch statement*/
