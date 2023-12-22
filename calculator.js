const display = document.getElementById('display');

// Get all button elements
let buttons = document.querySelectorAll('button');

// Initialize a variable to store the current display value
let displayValue = '';

// Add event listeners to all buttons to handle clicks
for (const item of buttons) {
    item.addEventListener('click', handleClick);
}

const backspaceButton = document.getElementById('backspace');

// Add event listener to the backspace button to handle backspace clicks
backspaceButton.addEventListener('click', () => {
    // Remove the last character from the display value
    displayValue = displayValue.slice(0, -1);
    // Update the display with the modified value
    display.value = displayValue;
});

function handleClick (e) {
    // Get the text content of the clicked button
    const buttonText = e.target.innerText;

    switch (buttonText) {
        case 'X':
            handleMultiplication();
            break;
        case 'C':
            handleClear();
            break;
        case '=':
            handleEquals();
            break;
        case '%':
            handlePercentage();
            break;
        case 'Backspace':
            handleBackspace();
            break;
        default:
            handleDefault(buttonText);
            break;
    }
}

function handleMultiplication () {
    // Append '*' to the display value
    displayValue += '*';
    // Update the display with the modified value
    display.value = displayValue;
}

function handleClear () {
    displayValue = '';
    display.value = displayValue;
}

function handleEquals () {
    try {
        // Use eval to calculate the result of the expression in the display value
        display.value = eval(displayValue);
    } catch (error) {
        // Handle any errors and display 'Error' on the calculator
        display.value = 'Error';
    }
}

function handlePercentage () {
    try {
        // Calculate the percentage of the current value in the display
        const result = eval(displayValue) / 100;
        // Convert the result to a string and update the display
        displayValue = result.toString();
        display.value = displayValue;
    } catch (error) {
        displayValue = 'Error';
        display.value = displayValue;
    }
}

function handleDefault (buttonText) {
    displayValue += buttonText;
    display.value = displayValue;
}
