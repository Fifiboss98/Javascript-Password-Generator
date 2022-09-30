const generatorBtn = document.querySelector(".generate")
const inputEl = document.querySelector(".input")
const copyBtn = document.querySelector(".btn")
const pwdContainerEl = document.querySelector(".pwd-container")

generatorBtn.addEventListener("click", () => {
    createPassword()
});

copyBtn.addEventListener("click", () => {
    copyPassword();
    if (inputEl.value) {
        pwdContainerEl.classList.remove("active");
        setTimeout(() => {
            pwdContainerEl.classList.add("active")
        }, 2000);
    };
    resetPassword();
});

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&^*{}()[]_+?:"
    const pwdLength = 18

    let password = ""
    for (let index = 0; index < pwdLength; index++) {
        const randomNum = Math.floor((Math.random() * chars.length))
        password += chars.substring(randomNum, randomNum + 1)
    }

    inputEl.value = password;
    pwdContainerEl.innerText = password + "  " + "copied !"
}

function copyPassword() {
    inputEl.select();
    // The following is for mobile
    inputEl.setSelectionRange(0, 20);
    navigator.clipboard.writeText(inputEl.value);
}

function resetPassword() {
    inputEl.value = "";
}