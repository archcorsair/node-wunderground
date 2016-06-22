const http = require('http');
const config = require('../config');

// Print out messages
function printMessage(temp, location, feelsLike, relHumidity, wind, lastUpdated) {
  const message = `The temperature in ${location} is ${temp}F.
Feels like: ${feelsLike}F\nRelative Humidity: ${relHumidity}\nWind: ${wind}\n${lastUpdated}`;
  console.log(message);
}
// Print out error messages
function printError(error) {
  console.error(error.message);
}
function get(searchTerm) {
  // Connect to Wunderground API
  const request = http.get(`http://api.wunderground.com/api/${config.apiKey}/conditions/q/${searchTerm}.json`, (response) => {
    let body = '';
    // Read Data
    response.on('data', (chunk) => { body += chunk; });
    response.on('end', () => {
      if (response.statusCode === 200) {
        try {
          // Parse data
          const weather = JSON.parse(body);
          // Print data
          printMessage(weather.current_observation.temp_f,
            weather.current_observation.display_location.full,
            weather.current_observation.feelslike_f, weather.current_observation.relative_humidity,
            weather.current_observation.wind_string, weather.current_observation.observation_time
          );
        } catch (error) {
          // Parse error
          printError(error);
        }
      } else {
        printError({ message: `There was an error getting the weather for ${searchTerm}.
          ${http.STATUS_CODES[response.statusCode]}` });
      }
    });
  });

  // Connection
  request.on('error', () => printError);
}

module.exports.get = get;
