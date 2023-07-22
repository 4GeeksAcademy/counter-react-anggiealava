import React from "react";


const SecondsCounter = ({ seconds = 0 }) => {

    function getDigit(num, digit) {
        let numero = `${num}`.padStart(8, "0")

        return numero[numero.length - (digit + 1)]
    }
    const [counter, setCounter] = React.useState(seconds)
    //let timer
    //if (!timer) setInterval(() => { setCounter(counter + 1) }, 1000)
    return (
        <div id="main-container" className="container text-center">
            <div className="row">
                <div className="col">
                    <i id="reloj" className="bi-stopwatch"></i>
                </div>
                <div className="col">
                    {getDigit(counter, 7)}
                </div>
                <div className="col">
                    {getDigit(counter, 6)}
                </div>
                <div className="col">
                    {getDigit(counter, 5)}
                </div>
                <div className="col">
                    {getDigit(counter, 4)}
                </div>
                <div className="col">
                    {getDigit(counter, 3)}
                </div>
                <div className="col">
                    {getDigit(counter, 2)}
                </div>
                <div className="col">
                    {getDigit(counter, 1)}
                </div>
                <div className="col">
                    {getDigit(counter, 0)}
                </div>

            </div>
        </div>
    );
}

export default SecondsCounter;