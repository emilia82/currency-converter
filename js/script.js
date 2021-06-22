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





// {
//     const ShowDateElement = document.querySelector(".js-data");

//     ShowDateElement = [todayDate, ShowDateElement]


//     const ShowDateElement = () => {
//         const newDate = new Date();
//         const todayDate = newDate.toLocaleDateString(
//             {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//                 weekday: "long",
//             });
//     };

//     return (
//         <p className="date">
//             Dzisiejsza data: todayDate();
//         </p>
//     );
// }
