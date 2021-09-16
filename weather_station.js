/**
 * Define the weather machine object.
 * 
 * Show the current weather in different locations. [locations, time - current(live/realtime), weather]
 */
const WeatherMachine = {
    location: {
        items: [
            {
                name: 'Nairobi',
                longitude: '5',
                latitude: '0'
            },
            {
                name: 'Kisumu',
                longitude: '15',
                latitude: '0'
            }
        ],
        currentLocation: 'Nairobi',
        // Do
        switchLocation: () => {
            // Change the current location attribute

            // Get the select element

            // Listen for changes. Add event listener

            // Get the value selected by the user

            // Set the value of the currentLocation
        }
    },
    time: {
        months: ['January']
    },
    weather: {
        currentWeather: {},
        samples: [],

        // Add function for fetching weather
        fetchCurrentWeather: (location, time) => {
            // Check the current time

            // If the time is less than today; show historical weather

            // If the time is greater than now; show forecast

            // 
        }
    }
}


const button = document.getElementById("weather_machine");


// event handler
const hoverOverButton = () => {
    // maizePlant.harvest();
    console.log('Height: ', maizePlant.height)

    // 1. Get the div where we are going to write text
    const weather_station = document.getElementById("content");

    // 2. Write the current weather into the div
    weather_station.innerHTML = Math.floor(Math.random() * 900 + 0);
    
}

// Add an event listener
button.addEventListener('mouseover', hoverOverButton);
