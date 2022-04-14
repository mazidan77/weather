const button = document.querySelector("button");
const input = document.querySelector("input");
let form = document.querySelector("form");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const describtion = document.querySelector(".describtion");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const icon = document.querySelector(".icon");
const finalinput = input.value;
 const button2 = document.querySelector(".btn")

button2.addEventListener("click", function () {
    const finalinput = input.value.trim(); 
    const successCallback =(position)=>{

        const lat = position.coords.latitude
        const lon = position.coords.longitude
        console.log(new Date())


        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=&lat="+lat+"&lon="+lon+"&units=metric&appid=e960033c8ddbc12f93f905b662921926"
          )
            .then((response) => response.json())
            .then((data) => {
              city.innerHTML = data.name;
             
              temp.innerHTML = `${data.main.temp}°`;
              describtion.innerHTML = data.weather[0].description;
              wind.innerHTML = `<i class="fa-solid fa-wind"></i> wind speed ${data.wind.speed} km/h `;
              humidity.innerHTML = ` humidity:  ${data.main.humidity} % `;
              document.body.style.backgroundImage =
                "url('https://source.unsplash.com/random/" +
                finalinput +
                ")";
        
              icon.src =
                "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
                input.value = " "
                console.log(data)
            })
        
            .catch((err) => alert("Please enter a valid City"));




    }
    const errorCallback =(error)=>{
        console.error(error)
    }
    
    navigator.geolocation.getCurrentPosition(successCallback,errorCallback)


   
});

// -=================================
 form.onsubmit = (e) => {
    
    const finalinput = input.value.trim(); 
    e.preventDefault();
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      finalinput +
        "&units=metric&appid=e960033c8ddbc12f93f905b662921926"
    )
      .then((response) => response.json())
      .then((data) => {
        city.innerHTML = data.name;
       
        temp.innerHTML = `${data.main.temp}°`;
        describtion.innerHTML = data.weather[0].description;
        wind.innerHTML = `<i class="fa-solid fa-wind"></i> wind speed ${data.wind.speed} km/h `;
        humidity.innerHTML = `  humidity:  ${data.main.humidity} % `;
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/1600x900/?" +
          finalinput +
          ")";
  
        icon.src =
          "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
          input.value = " "
          console.log(data)
      })
  
      .catch((err) => alert("Please enter a valid City"));
 }
//  https://api.openweathermap.org/data/2.5/weather?q=&lat=30.5934223&lon=31.4930254&units=metric&appid=e960033c8ddbc12f93f905b662921926
