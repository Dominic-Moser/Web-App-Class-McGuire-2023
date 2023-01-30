
function getWeather() {
    let cityName = document.getElementById("city").value;

    const APIKEY = "67475fc71a4d228f978ba24b1ca03f05";
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" +
     cityName + "&appid=" + APIKEY;
   
    fetch(URL)
        .then(function (response) {
            return response.json()
            })
        .then(function (data) {
            console.log(data);
            let cityName = data["name"];
            let temp = Math.round((data.main.temp - 273.15) * 1.8 + 32);
            let description = data.weather.main;
            let feltTemp = Math.round((data.main.feels_like - 273.15) * 1.8 + 32);
            
            document.getElementsByClassName("city").innerHTML = cityName;
            document.getElementsByClassName("temp").innerHTML = temp + "°F";
            document.getElementsByClassName("description").innerHTML = description;
            
            document.getElementById("output").innerHTML = fact;


            document.getElementById("output").innerHTML = fact;
            })
        .catch(function (error) {
            console.log(JSON.stringify(error));
            });
    }
    
                // let fact = "The temperature in " + data["name"] + " is " +
            //  temp + " degrees." ;

    // {
    //     "coord": {
    //         "lon": -104.9847,
    //         "lat": 39.7392
    //     },
    //     "weather": [
    //         {
    //             "id": 800,
    //             "main": "Clear",
    //             "description": "clear sky",
    //             "icon": "01d"
    //         }
    //     ],
    //     "base": "stations",
    //     "main": {
    //         "temp": 276.74,
    //         "feels_like": 273.26,
    //         "temp_min": 273.09,
    //         "temp_max": 278.54,
    //         "pressure": 1018,
    //         "humidity": 28
    //     },
    //     "visibility": 10000,
    //     "wind": {
    //         "speed": 4.02,
    //         "deg": 256,
    //         "gust": 8.94
    //     },
    //     "clouds": {
    //         "all": 7
    //     },
    //     "dt": 1674767371,
    //     "sys": {
    //         "type": 2,
    //         "id": 2002746,
    //         "country": "US",
    //         "sunrise": 1674742381,
    //         "sunset": 1674778298
    //     },
    //     "timezone": -25200,
    //     "id": 5419384,
    //     "name": "Denver",
    //     "cod": 200
    // }