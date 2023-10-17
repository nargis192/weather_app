function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Replace these credentials with your actual authentication logic
    if (username === "your_username" && password === "your_password") {
        // Redirect to the weather app (replace 'weather_app.html' with your app's URL)
        window.location.href = "weather_app.html";
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password. Please try again.");
        return false;
    }
}
    

const humidity=document.getElementById("id1");
console.log(humidity);
const cloud=document.getElementById("id2");
const wind=document.getElementById("id4");
const city=document.getElementById("city");
const feels=document.getElementById("id3");
console.log(city);

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getWeather(latitude, longitude);
    }, function (error) {
        console.error("Error getting location: " + error.message);
    });
} else {
    console.log("Geolocation is not available in this browser.");
};

async function getWeather(latitude, longitude) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude},${longitude}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ef8d1ff35fmsh2f4d84d6f15f726p1a8f64jsn681ea2c3f90a',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        // result.innerHTML=`Temp of ${result.location.name} is ${result.current.temp_c}°C `;
        weatherInfo.textContent = `Temperature is ${result.current.temp_c}°C`;
        humidity.textContent=`${result.current.humidity}%`;
        cloud.textContent=result.current.cloud;
        wind.textContent=result.current.wind_degree;
        city.textContent=result.location.name;
        feels.textContent=result.current.feelslike_c;



    } catch (error) {
        console.error(error);
       
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const getCurrentWeatherBtn = document.getElementById("getCurrentWeatherBtn");
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const locationInput = document.getElementById("locationInput");
    const result=document.getElementById("result");
    const weatherInfo = document.getElementById("weatherInfo");
    
  
    getCurrentWeatherBtn.addEventListener("click", function () {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                getWeather(latitude, longitude);
            }, function (error) {
                console.error("Error getting location: " + error.message);
            });
        } else {
            console.log("Geolocation is not available in this browser.");
        }
    });
  
    getWeatherBtn.addEventListener("click", function () {
        const city = locationInput.value.trim().charAt(0).toUpperCase()+locationInput.value.slice(1);;
        if (city === "") {
            alert("Please enter a city name.");
            return;
        }
        
        searchWeather(city);
        locationInput.value="";
    });
  
    async function getWeather(latitude, longitude) {
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude},${longitude}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ef8d1ff35fmsh2f4d84d6f15f726p1a8f64jsn681ea2c3f90a',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
  
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            alert("Request is successfully accepted");
            // result.innerHTML=`Temp of ${result.location.name} is ${result.current.temp_c}°C `;
            weatherInfo.textContent = `Temperature is ${result.current.temp_c}°C`;
            humidity.textContent=`${result.current.humidity}%`;
            cloud.textContent=result.current.cloud;
            wind.textContent=result.current.wind_degree;
            city.textContent=result.location.name;
            feels.textContent=result.current.feelslike_c;
            


        } catch (error) {
            console.error(error);
           
        }
    }
  
    async function searchWeather(location) {
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${location}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ef8d1ff35fmsh2f4d84d6f15f726p1a8f64jsn681ea2c3f90a',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
  
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            // result.innerHTML=`Temp of is ${result.temp}°C `;
          //   weatherInfo.textContent = `Temperature of ${location} is ${result.temp}°C`;
  
            if(result.temp){
              alert("Request is successfully accepted");
              weatherInfo.textContent = `Temperature is ${result.temp}°C`;
              humidity.textContent=`${result.humidity}%`;
              cloud.textContent=result.cloud_pct;
              wind.textContent=result.wind_degrees;
              city.textContent=location;
              feels.textContent=result.feels_like;

            }
            else{
              console.log("wrong");
              alert("Oops...Request denied! something went wrong!");
              weatherInfo.textContent = `0°C`;
              humidity.textContent=0;
              cloud.textContent=0;
              wind.textContent=0;
              city.textContent="none";
              feels.textContent=0;

            }
            
        }   catch (error) {
            console.error(error);
           
        }
    }
  });
  
  const selector=document.getElementById("selector");
  let maindiv=document.getElementById("middlediv")
  console.log(middlediv);
  middlediv.style.display="none";
 
  
  selector.addEventListener("click", function () {
        console.log("clicked");
        let currentDisplay =middlediv.style.display;
        console.log(currentDisplay);
  
         // Toggle the display value
        middlediv.style.display = currentDisplay === "none" ? "block" : "none";
       
       
       
  });

  const cancel=document.getElementById("cancel");
  cancel.addEventListener("click", function () {
    console.log("clicked cancel");

    middlediv.style.display="none";
   

});



  