
import { DateTime } from "luxon";

const API_KEY = 'd16335bdef3729ad654e26d0174842a8'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

const getWeatherData = async (infoType, searchParams) => {
	const url = new URL(BASE_URL + infoType);
	url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

	const res = await fetch(url);
	return await res.json();
}

const iconUrlFromCode = (icon) => 
	`../weather-icons/${icon}.png`;

const bgUrlFromCode = (icon) => {
	return `../weather-bg/${icon}.png`;
}

const formatToLocalTime = (
	secs, 
	offset, 
	format = "cccc, dd LLL yyyy"
) => DateTime.fromSeconds (secs + offset, { zone: "utc" }).toFormat(format)

const formatTime = (
	secs, 
	offset, 
	format = "HH:mm"
) => DateTime.fromSeconds (secs + offset, { zone: "utc" }).toFormat(format)

const formatCurrent = (data) => {
	const {
		coord: { lat, lon },
		main: { feels_like, humidity, temp, temp_min, temp_max },
		name, 
		dt, 
		sys: { country, sunrise, sunset },
		weather, 
		wind: { speed },
		timezone,
	} = data;

	const { description: details, icon } = weather[0];
	const formattedLocalTime = formatToLocalTime(dt, timezone)
	const formattedTime = formatTime(dt, timezone)

	return {
		feels_like,
		humidity,
		temp,
		temp_min,
		temp_max,
		name,
		country,
		sunrise: formatToLocalTime(sunrise, timezone, 'HH:mm'),
		sunset: formatToLocalTime(sunset, timezone, 'HH:mm'),		
		speed,
		details,
		icon: iconUrlFromCode(icon),
		bg: bgUrlFromCode(icon),
		formattedLocalTime,
		formattedTime,
		dt,
		timezone,
		lat,
		lon,
	}
}

const formatForecastWeather = (secs, offset, data) => {
		//daily
		const daily = data
		.filter((f) => f.dt_txt.slice(-8) === "09:00:00")
		.map((f) => ({
			temp: f.main.temp,
			feels_like: f.main.feels_like,
			title: formatToLocalTime(f.dt, offset, "ccc"),
			titleFull: formatToLocalTime(f.dt, offset, "cccc"),
			icon: iconUrlFromCode(f.weather[0].icon),
			date: f.dt_txt[0],
		}))
		return { daily }
}


const getFormattedWeatherData = async (searchParams) => {
	const formatCurrentWeather = await getWeatherData(
		"weather",
		searchParams
	).then(formatCurrent)

	const {dt, lat, lon, timezone} = formatCurrentWeather;

	const formattedForecastWeather = await getWeatherData("forecast", {
		lat,
		lon,
		units: searchParams.units,
	}).then((d) => formatForecastWeather(dt, timezone, d.list))

	return { ...formatCurrentWeather, ...formattedForecastWeather }
}

export default getFormattedWeatherData