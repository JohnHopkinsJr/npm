var express = require("express");
var bodyParser = require("body-parser");

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.get('/', () => {
  let citys = ['Panama City Beach, FL','Atlanta,GA','New Orleans, LA','Santa Cruz, CA','San Antonio, TX'];
  citys.forEach(city, i => {
    let url=`https://samples.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=97e6e096f145014a06bda045776b8fd5`;
    axios.get(url) })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });

  });

module.exports = app;



Collapse 

Message Input
