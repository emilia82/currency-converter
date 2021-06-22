{
    const calculateResult = (rateEUR, amount)
    
    const rateEUR = 4.56;

    switch (currency) {

        calculateResult = amount / rateEUR;
    break;
        }



    const updateResultText = ({ amount, currency, result }) () => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;   

        };

const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(currency, amount);
        updateResultText(amount, currency, result);



}

const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
    }; 

    init();
};





