{
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");
const formElement = document.querySelector(".js-form");

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.5649;
        const rateUSD = 3.7855;
        const rateGB = 5.2579;
        const rateCHF = 4.1148;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GB":
                return amount / rateGB;

            case "CHF":
                return amount / rateCHF;
        }
    };

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

    
        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        resultElement.innerText = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    });
};


// {
//     const clock = document.querySelector(".js-clock");

//     ShowDateElement = (todayDate, clock);


//     const ShowDateElement = () => {
//         const newDate = new Date();
//         const todayDate = newDate.toLocaleDateString(
//             {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//                 weekday: "long",
//             });
    

//     return (
//         <p class="date">
//             Dzisiejsza data: todayDate();
//         </p>
//     );

//     }
// };
