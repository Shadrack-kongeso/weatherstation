/**
 * Define the weather machine object.
 * 
 * Show the current weather in different locations. [locations, time - current(live/realtime), weather]
 */
const WeatherMachine = {
    location: {
        items: [
            {
                name: 'London',
                longitude: '5',
                latitude: '0'
            },
            {
                name: 'Nairobi',
                longitude: '5',
                latitude: '0'
            },
            {
                name: 'Kisumu',
                longitude: '15',
                latitude: '0'
            },
            {
                name: 'Mombasa',
                longitude: '15',
                latitude: '0'
            },
            {
                name: 'Nakuru',
                longitude: '15',
                latitude: '0'
            },
            {
                name: 'Siaya',
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

// Getting the locations from the weather station object and assign to variable.
const locations = WeatherMachine.location.items;

// Get the select element for locations
const location_selector = document.getElementById('location-selector');

function addLocationToSelector(location) {
    // Create option element from scratch
    const option = document.createElement('option');
    option.value = location.name;
    option.text = location.name;
  
    location_selector.appendChild(option);
}

// loop through the array and create an option element for evey location
locations.forEach(addLocationToSelector);



const button = document.getElementById("weather_machine");


// event handler
const hoverOverButton = () => {
    // 1. Get the div where we are going to write text
    const weather_station = document.getElementById("content");

    // 2. Write the current weather into the div
    weather_station.innerHTML = Math.floor(Math.random() * 900 + 0);
    
}

// Add an event listener
button.addEventListener('mouseover', hoverOverButton);
