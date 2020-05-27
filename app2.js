'use strict';

console.clear()
console.log('Enter your city')

const axios = require('axios');

const getData = async (cityName) => { // functioin for getting data
	const API_KEY = '3bd68c313a18c02837369e027d9ac4bd';
	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
	const response =  await axios.get(URL); // getting request from  API
	const object = await response.data; // fetting data from request	
	return object
}
// async anonim function for working with promises

(async () => {
	let stdin = process.openStdin();
	const cityName = await new Promise((resolve, reject) => {
		stdin.addListener("data", d => {
	 resolve(d.toString().trim());
	 });
	});
	
	const object2 = await getData(cityName);;

	const visibility = 'Visibility is:' + object2.visibility + ' ' + 'metres';
	console.log(visibility);

	const sky = 'Sky:' + object2.weather.main;
		console.log(sky);

	const temp = 'Current temperature is:' + Math.round(object2.main.temp - 273) + '°';
		console.log(temp);
		
	const feelslike = 'Feels like:' + Math.round(object2.main.feels_like - 273) + '°';
		console.log(feelslike);

	const minTemp = 'Min temperature for today is:' + Math.round(object2.main.temp_min - 273) + '°';
		console.log(minTemp);

	const maxTemp = 'Max temperature for today is:' + Math.round(object2.main.temp_max - 273) + '°';
		console.log(maxTemp);

	const wind = 'Wind speed is:' + object2.wind.speed + ' ' + 'm/s';
		console.log(wind);

		process.exit(-1)
})();



console.log('Hi')
console.log('you are noob')
console.log('bitch')
console.log('mad bro')