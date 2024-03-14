const main = (event) => {
  // If you remove the next line, it will show real data
  dataSource.enableTestMode();

  // let newsData = dataSource.getNews("Science"));
  let weatherData = dataSource.getWeather("Tokyo");

  console.log(weatherData);

  let temperatureDiv = document.getElementById("temperature");
  temperatureDiv.innerText = "The current temperature is " + weatherData.tempC;
};

window.addEventListener("load", (event) => main(event));
