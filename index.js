const cityRef = document.getElementById("city");
const tempratureRef = document.getElementById("temperature");
const speedRef = document.getElementById("speed");
const humidityRef = document.getElementById("humidity");
const inputRef = document.getElementById("input");
const btnRef = document.getElementById("btn");

function fillData(data) {
  cityRef.innerText = data.name;
  tempratureRef.innerText = `Temp: ${data.main.temp} C`;
  speedRef.innerText = `wind Speed: ${data.wind.speed}`;
  humidityRef.innerText = `Humidity: ${data.main.humidity}`;
}

btnRef.addEventListener("click", function (e) {
  const cityName = inputRef.value;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=fd0974b3cebaa623dd17eedf62f68720`;
  fetch(api)
    .then(function (msg) {
      return msg.json();
    })
    .then(function (data) {
      fillData(data);
    });
});
