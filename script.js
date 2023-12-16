// Retrieve document elements
let genPwdBtn = document.querySelector("#password-btn");
let firstPwdEl = document.querySelector("#password-1");
let secondPwdEl = document.querySelector("#password-2");

// Define functions
function generatePasswords() {
    alert("You clicked the generator button");
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