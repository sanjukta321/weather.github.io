// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
 const getWeather =  (city)=>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
 .then(response => response.json())
 .then((response)=>{
	 console.log(response)
 
// 	console.log(result);
	cloud_pct.innerHTML = response.cloud_pct
 	temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
 	feels_like.innerHTML = response.feels_like
 	humidity.innerHTML = response.humidity
 	humidity2.innerHTML = response.humidity
 	min_temp.innerHTML = response.min_temp
 	max_temp.innerHTML = response.max_temp
 	wind_speed.innerHTML = response.wind_speed
 	wind_speed2.innerHTML = response.wind_speed
 	sunrise.innerHTML = response.sunrise
 	sunset.innerHTML = response.sunset
})
.catch(err => console.error(err));
 }
 submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
 })

getWeather("Delhi")

async function allCitiesWeather(){
	const arr=["Mumbai","Kolkata","Delhi","Odisha","Bangalore","Hyderabad"];
	var htmlstring =``;
	arr.forEach(city=>{
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
 .then(response => response.json())
 .then((response)=>{
	htmlstring +=`
	<tr>
	<th scope="row" class ="text-start">${city}</th>
	<td> ${response.cloud_pct}</td>
	<td> ${response.feels_like}</td>
	<td> ${response.humidity}</td>
	<td> ${response.max_temp}</td>
	<td> ${response.min_temp}</td>
	<td> ${response.sunrise}</td>
	<td> ${response.sunset}</td>
	<td> ${response.wind_speed}</td>

	</tr>
	
	`
   document.getElementById("weather-data").innerHTML= htmlstring;



	})
})
}
allCitiesWeather();






