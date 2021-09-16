const button = document.getElementById("weather_machine");

// event handler
const hoverOverButton = () => {
    console.log('Hover')

    // 1. Get the div where we are going to write text
    const weather_station = document.getElementById("content");

    // 2. Write the current weather into the div
    weather_station.innerHTML = Math.floor(Math.random() * 900 + 0);
    
}

// Add an event listener
button.addEventListener('mouseover', hoverOverButton)
