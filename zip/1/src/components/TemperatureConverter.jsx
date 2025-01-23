import React, { useState } from 'react';
export default function Temperatura() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const handleCelsiusChange = (e) => {
        const celsiusValue = e.target.value;
        setCelsius(celsiusValue);
        setFahrenheit(((parseFloat(celsiusValue) * 9) / 5 + 32).toFixed(2));
    };

    const handleFahrenheitChange = (e) => {
        const fahrenheitValue = e.target.value;
        setFahrenheit(fahrenheitValue);
        setCelsius(((parseFloat(fahrenheitValue) - 32) * 5 / 9).toFixed(2));
    };
    return (


        <div>
            <label>
                Celsius:
                <br />
                <input
                    type="number"
                    value={celsius}
                    onChange={handleCelsiusChange}
                />
            </label>
            <br />
            <label>
                Fahrenheit:
                <br />
                <input
                    type="number"
                    value={fahrenheit}
                    onChange={handleFahrenheitChange}
                />
            </label>
        </div>
    )


}


