# node-wunderground

#### Get weather from Wunderground direct to console

Feature list:

 * Displays basic weather information to your console
 * Search by city name
 * Search by city and state
 * Search by zipcode

## Example Usage
### Search by city name
```
$node main.js tarzana
```

#### Will return:
```
The temperature in Tarzana, CA is 71.6F.
Feels like: 71.6F
Relative Humidity: 69%
Wind: Calm
Last Updated on June 22, 12:03 AM PDT
```

### Search by city and state
```
$node main.js portland
```

#### Will return:
```
Your search term (portland) returned multiple results.
Try adding the state at the end of your search. Example: Portland OR
```

#### Oops! Let's try that again:
```
$node main.js portland or
```

#### Will Return:
```
The temperature in Portland, OR is 76.5F.
Feels like: 76.5F
Relative Humidity: 38%
Wind: From the ENE at 1.1 MPH Gusting to 2.5 MPH
Last Updated on June 22, 5:04 PM PDT
```

### Search by zipcode
```
$node main.js 91367
```

#### Will return:
```
The temperature in Woodland Hills, CA is 71.6F.
Feels like: 71.6F
Relative Humidity: 62%
Wind: From the East at 2.0 MPH Gusting to 5.0 MPH
Last Updated on June 22, 12:18 AM PDT
```

### Setup:
* Obtain a free API key from [Wunderground](https://www.wunderground.com/weather/api/).
* Create a `config.js` file at the project root. It should look like this:
```javascript
module.exports = {
  apiKey: '<YOUR API KEY>'
}
```
* Don't forget to add `config.js` to your `.gitignore` file!


### Known issues:

 * ~~Searching by city string may return an error if there is more than one result~~[Issue 1 - Fixed](https://github.com/archcorsair/node-wunderground/issues/1)

### License:
This project is licensed under the terms of MIT License, see the LICENSE file for more info.
