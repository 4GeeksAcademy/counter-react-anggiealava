import React from "react";

let timer

const SecondsCounter = ({ seconds = 0 }) => {

    function getDigit(num, digit) {
        let numero = `${num}`.padStart(8, "0")

        return numero[digit]
    }

    let counter = seconds

    if (timer) {
        clearInterval(timer)
    }

    timer = setInterval(() => {
        counter = counter + 1
        let digits = document.querySelectorAll("#main-container .digit")

        digits.forEach((digit, index) => {
            digit.textContent = getDigit(counter, index)
        })

    }, 1000)


    return (
        <div id="main-container" className="container text-center">
            <div className="row">
                <div className="col">
                    <i id="reloj" className="bi-stopwatch"></i>
                </div>
                <div className="col digit">
                    {getDigit(counter, 0)}
                </div>
                <div className="col digit">
                    {getDigit(counter, 1)}
                </div>
                <div className="col digit">
                    {getDigit(counter, 2)}
                </div>
                <div className="col digit">
                    {getDigit(counter, 3)}
                </div>
                <div className="col digit">
                    {getDigit(counter, 4)}
                </div>
                <div className="col digit">
                    {getDigit(counter, 5)}
                </div>
                <div className="col digit">
                    {getDigit(counter, 6)}
                </div>
                <div className="col digit">
                    {getDigit(counter, 7)}
                </div>

            </div>
        </div>
    );
}

export default SecondsCounter;