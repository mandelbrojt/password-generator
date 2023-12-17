const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

// Retrieve document elements
let genPwdBtn = document.querySelector("#password-btn");
let firstPwdEl = document.querySelector("#password-1");
let secondPwdEl = document.querySelector("#password-2");

// Retrieve user input values and states
const pwdLength = document.querySelector("#pwd-length").value;
const symbolsEnabled = document.querySelector("#toggle-syms").checked;
const numbersEnabled = document.querySelector("#toggle-nums").checked;

// Check input values

// Define functions
function generatePasswords() {
    let message = `Generating passwords with: ${pwdLength} and ${symbolsEnabled} and ${numbersEnabled}`;
    alert(message);
}

function copyToClipboard(passwordId) {
    const passwordElement = document.getElementById(passwordId);
    const passwordText = passwordElement.innerText;

    navigator.clipboard.writeText(passwordText)
        .then(() => {
            console.log("Password copied to clipboard");
            alert("Password copied to clipboard");
        })
        .catch((error) => {
            console.error("Failed to copy password to clipboard:", error);
            alert("Failed to copy password to clipboard");
        });
}

// Add event listeners
genPwdBtn.addEventListener("click", generatePasswords);
firstPwdEl.addEventListener("click", () => copyToClipboard("password-1"));
secondPwdEl.addEventListener("click", () => copyToClipboard("password-2"));