const weather = require('./weather');
const searchTerm = process.argv.slice(2);
weather.get(searchTerm).then(function(result) {
  // Parse data
  const weather = JSON.parse(body);
  // Temporary way to handle Multi-result search. State search no implemented yet.
  if (weather.results || weather.response.results) {
    console.log(`Your search term (${searchTerm}) returned multiple results.
Try adding the state at the end of your search. Example: Portland OR`);
  } else if (weather.current_observation) {
    // Print data
    weather.printMessage(weather.current_observation.temp_f,
      weather.current_observation.display_location.full,
      weather.current_observation.feelslike_f,
      weather.current_observation.relative_humidity,
      weather.current_observation.wind_string,
      weather.current_observation.observation_time
    );
  }
}).catch(function(error) {
  weather.printError(error)
})
