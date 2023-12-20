const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
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
function randomIndex(charsArray) {
    return Math.floor(Math.random() * charsArray.length)
}

function generatePasswords() {
    let randomPassOne = "";
    let randomPassTwo = "";
    for (let i=0; i < pwdLength; i++) {
        randomPassOne += letters[randomIndex(letters)];
        randomPassTwo += letters[randomIndex(letters)];
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