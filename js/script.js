{
    const inputElement = document.querySelector(".js-input");
const sumbmitElement = document.querySelector(".js-submit")
const resultElement = document.querySelector(".js-result");
const formElement = document.querySelector(".js-form");

const euro = 4.55;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
});


sumbmitElement.addEventListener("click", () => {
    const result = inputElement.value / euro;

    resultElement.innerText = result.toFixed(2) +   "  €";
});

}

