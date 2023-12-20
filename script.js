const lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

// Retrieve document elements
let genPwdBtn = document.querySelector("#password-btn");
let firstPwdEl = document.querySelector("#password-1");
let secondPwdEl = document.querySelector("#password-2");

// Define functions
function randomIndex(charsArray) {
    return Math.floor(Math.random() * charsArray.length)
}

function generatePasswords() {
    // Retrieve user input values and states
    const pwdLength = document.querySelector("#pwd-length").value;
    const upperCaseEnabled = document.querySelector("#toggle-uppercase").checked;
    const symbolsEnabled = document.querySelector("#toggle-syms").checked;
    const numbersEnabled = document.querySelector("#toggle-nums").checked;
    
    let randomPassOne = "";
    let randomPassTwo = "";
    let chars = lowerLetters;

    // Evaluate user input to include special characters
    if (upperCaseEnabled) {
        chars = chars.concat(upperLetters);
    }
    if (symbolsEnabled) {
        chars = chars.concat(symbols);
    }
    if (numbersEnabled) {
        chars = chars.concat(numbers);
    }
    
    for (let i=0; i < pwdLength; i++) {
        randomPassOne += chars[randomIndex(chars)];
        randomPassTwo += chars[randomIndex(chars)];
    }
    
    firstPwdEl.textContent = randomPassOne;
    secondPwdEl.textContent = randomPassTwo;
}

function copyToClipboard(passwordId) {
    const passwordElement = document.getElementById(passwordId);
    const passwordText = passwordElement.innerText;

    navigator.clipboard.writeText(passwordText)
        .then(() => {
            console.log("Password copied to clipboard");
            // alert("Password copied to clipboard");
        })
        .catch((error) => {
            console.error("Failed to copy password to clipboard:", error);
            // alert("Failed to copy password to clipboard");
        });
}

// Add event listeners
genPwdBtn.addEventListener("click", generatePasswords);
firstPwdEl.addEventListener("click", () => copyToClipboard("password-1"));
secondPwdEl.addEventListener("click", () => copyToClipboard("password-2"));