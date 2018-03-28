/*************************************
* logger(array)
*
* - Accepts an array
* - Logs every element of the array
************************************/
const logger = function(array) {
	array.forEach(arr =>console.log("all elements are:"));
};


/*************************************
* toCelsius(temperatures)
*
* - Accepts an array of temperatures
*   in degrees Fahrenheit
* - Returns an array of temperatures
*   in degrees Celsius
*	let Fehren =temperatures.map(temp => (temp- 32)* (5/9) );

* The conversion is:
*   C = (F - 32) * (5/9)
************************************/
const toCelsius = function(temperatures) {
	
	let Fahrenheit =temperatures.map(temp => (temp-32) *(5/9));
	return Fahrenheit;
		




};


/**************************************
* hottestDays(temperatures, threshhold)
*
* - Accepts an array of temperatures
* - Accepts a threshhold temperature
* - Returns an array of temperatures
*   that exceed the threshhold
***************************************/
const hottestDays = function(temperatures, threshhold) {
  let hotdays = temperatures.filter(temp => (temp >threshhold));

  return hotdays;
}


/******************************************
* logHottestDays(temperatures, threshhold)
*
* - Accepts an array of temperatures
*   IN DEGREES FAHRENHEINT
* - Accepts a threshhold temperature
*   IN DEGREES FAHRENHEINT
* - Logs temperatures that exceed the
*   threshhold to the console
*   IN DEGREES CELSIUS
*
* hint: you can combine
*       all previous functions
*******************************************/
const logHottestDays = function(temperatures, threshhold) {
  let hotdays = temperatures.filter(temp => (temp > threshhold));
  let Fahrenheit = hotdays.map(temp => (temp-32) * (5/9));
  Fahrenheit.forEach(arr => console.log(arr));
}


export {logger, toCelsius, hottestDays, logHottestDays}
