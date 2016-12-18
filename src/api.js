import _ from 'lodash';
var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=6f46b9c52cf000a74672019685e4e62e';

var KelvinToC = function(kelvin) {
  return Math.round(kelvin - 273.15) + ' ˚C'
};

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
      .then(function(response){
          return response.json();
      })
      .then(function(json){
        return {
          city: json.name,
          temperature: KelvinToC(json.main.temp),
          description: _.capitalize(json.weather[0].description)
        }
      });
}
