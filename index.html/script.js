let inputElement = document.querySelector(".js-input");
let sumbmitElement = document.querySelector(".js-submit")
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

let euro = 4.55;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
});


sumbmitElement.addEventListener("click", () => {
    let result = inputElement.value / euro;

    resultElement.innerText = result.toFixed(2) +   "  €";
});

