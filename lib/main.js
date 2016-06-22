const weather = require('./weather');
const zipcode = process.argv.slice(2);
weather.get(zipcode);
