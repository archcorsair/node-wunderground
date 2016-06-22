const weather = require('./weather');
const searchTerm = process.argv.slice(2);
weather.get(searchTerm);
