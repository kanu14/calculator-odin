
// get DOM event listener for buttons
// add clicked buttons to an array
// separate the array into numbers broken by the calculations
// order as bodmas
// use equals to run the program and print

// start by getting clicked buttons into array and displaying at top

const buttons = document.querySelectorAll('button');
const input = document.querySelector('#entered');
const display = document.querySelector('#calculation');

let values = "" ;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let choice = button.textContent;
        if (choice === "AC") {
            values = '';
            input.textContent = "numbers";
            display.textContent = "0";
        } else if (choice === "Del") {
            values = values.slice(0, -1);
            input.textContent = values || "numbers";
        } else if (choice === "=") {
            try {
                const result = eval(values.replace(/x/g, '*'));
                display.textContent = result;
            } catch (error) {
                display.textContent = "Error";
            }
        } else {
            values += choice;
            input.textContent = values;
        }
        
    })
});