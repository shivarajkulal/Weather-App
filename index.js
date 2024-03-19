const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const API_KEY = process.env.API_KEY;
const port = 5000;

app.get("/", (req, res) => {
  //const address = req.query.address; 
  //const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${API_KEY}`;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&appid=${API_KEY}`;
  console.log(url);

  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      const cityName = data.name;
      const temperature = data.main.temp;
      const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
      const message = `City Name: ${cityName}<br>Temperature: ${temperature}&deg;C<br>Sunset Time: ${sunsetTime}`;

      res.send(
        `<html><body><div id='container'><h1>${message}</h1></div></body></html>`
      );
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error occurred while fetching weather data");
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
