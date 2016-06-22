const http = require('http');
const config = require('../config.js');

function printMessage(zipcode) {
  const message = `The temp in ${zipcode} is <tempF>.`;
  console.log(message);
}
// Connect to Wunderground API
const request = http.get(`http://api.wunderground.com/api/${config.apiKey}/conditions/q/CA/91367.json`, (response) => {
  let body = '';
  // Read Data
  response.on('data', (chunk) => { body += chunk; });
  response.on('end', () => { console.log(body); });
});

// Handle Error Event
request.on('error', (error) => { console.error(error.message); });
