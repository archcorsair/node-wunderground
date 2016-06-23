const http = require('http');
const config = require('../config');
const state = '';
const streamPromise = require('sb-stream-promise')

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
  return new Promise(function(resolve, reject) {
    http.get(`http://api.wunderground.com/api/${config.apiKey}/conditions/q/${state || ''}/${searchTerm}.json`, function(response) {
      streamPromise.create(response).then(function(result) {
        if (response.statusCode !== 200) {
          throw new Error(`There was an error getting the weather for ${searchTerm}. ${http.STATUS_CODES[response.statusCode]}`)
        }
        try {
          return JSON.parse(result)
        } catch (_) {
          throw new Error('Unable to parse API response')
        }
      }, reject)
    }).on('error', reject)
  })
}

module.exports.get = get
module.exports.printError = printError
module.exports.printMessage = printMessage
