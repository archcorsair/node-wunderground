# node-wunderground

#### Get weather from Wunderground direct to console

Feature list:

 * Displays basic weather information to your console
 * Search by city name
 * Search by zipcode

## Example Usage

```
$node main.js tarzana
```
Will return:
```
The temperature in Tarzana, CA is 71.6F.
Feels like: 71.6F
Relative Humidity: 69%
Wind: Calm
Last Updated on June 22, 12:03 AM PDT
```

```
$node main.js 91367
```
Will return:
```
The temperature in Woodland Hills, CA is 71.6F.
Feels like: 71.6F
Relative Humidity: 62%
Wind: From the East at 2.0 MPH Gusting to 5.0 MPH
Last Updated on June 22, 12:18 AM PDT
```

### Setup:
* Obtain a free API key from [Wunderground](https://www.wunderground.com/weather/api/).
* Create a config.js file at the project root. It should look like this:
```javascript
module.exports = {
  apiKey: '<YOUR API KEY>'
}
```


### Known issues:

 * Searching by city string may return an error if there is more than one result
