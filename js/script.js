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

        resultElement.innerText = result.toFixed(2) + "  €";
    });

}

{
    const ShowDateElement = document.querySelector(".js-data");

    ShowDateElement = [todayDate, ShowDateElement]


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
}
