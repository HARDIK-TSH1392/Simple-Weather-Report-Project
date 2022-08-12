const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){

    const query = London;
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b7935dd56da59b3ee959b80de516a2c2";
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp - 273;
            const weatherDesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p>The weather is currently " + weatherDesc + "</p>");
            res.write("<h1>The temperature in London is " + temp + " degree Celcius.</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        });
    });
    
});



app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});