
const celciusEl = document.getElementById('celsius');
const fahrenheitEl = document.getElementById('fahrenheit');
const kalvinEl = document.getElementById('kalvin');


function computeTemp(event){
    const currentValue = +event.target.value;

    switch (event.target.name) {
        case 'celsius':
            kalvinEl.value = (currentValue + 273.32).toFixed(2);
            fahrenheitEl.value = (currentValue * 1.8 - 32).toFixed(2)
            break;
        case 'fahrenheit':
                celciusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
                kalvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
                break;
        case 'kelvin':
            celciusEl.value = (currentValue - 273.32).toFixed(2);
            fahrenheitEl.value = ((value - 273.32) * 1.8 + 32).toFixed(2);
            break;
    
        default:
            break;
    }
}