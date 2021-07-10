{
    
    const calculateResult = (currency, amount) => {
        
        const rateEUR = 4.5649;
        const rateUSD = 3.7855;
        const rateGB = 5.2579; 
        const rateCHF =  4.1148;

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
    
   
    const updateResultText = ( currency, amount, result ) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;   

    };

const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currency.value;

    const result = calculateResult(curency, amount);
    updateResultText(amount, currency, result);

};

const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
    }; 

    init();
};


{
    const clock = document.querySelector(".js-clock");

    ShowDateElement = [todayDate, clock]


    const ShowDateElement = () => {
        const newDate = new Date();
        const todayDate = newDate.toLocaleDateString(
            {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
            });
    };

    return (
        <p className="date">
            Dzisiejsza data: todayDate();
        </p>
    );
};
