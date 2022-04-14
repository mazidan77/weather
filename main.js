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

// button.addEventListener("click", function () {
  
// });
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
        wind.innerHTML = `wind speed ${data.wind.speed} km/h `;
        humidity.innerHTML = `humidity:  ${data.main.humidity} % `;
        document.body.style.backgroundImage =
          "url('https://source.unsplash.com/random/700%C3%9400/?" +
          finalinput +
          ")";
  
        icon.src =
          "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
          input.value = " "
          console.log(data)
      })
  
      .catch((err) => alert("Please enter a valid City"));
 }