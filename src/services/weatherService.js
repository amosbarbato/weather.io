
import { DateTime } from "luxon";

const API_KEY = 'd16335bdef3729ad654e26d0174842a8'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

const getWeatherData = (infoType, searchParams) => {
	const url = new URL(BASE_URL + infoType);
	url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

	return fetch(url).then((res) => res.json())
}

const iconUrlFromCode = (icon) => 
	`../src/assets/weather-icons/${icon}.png`;


const formatToLocalTime = (
	secs, 
	offset, 
	format = "cccc, dd LLL yyyy"
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

	const { description: details, icon, } = weather[0];
	const formattedLocalTime = formatToLocalTime(dt, timezone)

	return {
		feels_like,
		humidity,
		temp,
		temp_min,
		temp_max,
		name,
		country,
		sunrise: formatToLocalTime(sunrise, timezone, 'hh:mm a'),
		sunset: formatToLocalTime(sunset, timezone, 'hh:mm a'),		
		speed,
		details,
		icon: iconUrlFromCode(icon),
		formattedLocalTime,
		dt,
		timezone,
		lat,
		lon,
	}
}

const formatForecastWeather = (secs, offset, data) => {
	//hourly
	const hourly = data
		.filter((f) => f.dt > secs)
		.map((f) => ({
			temp: f.main.temp,
			title: formatToLocalTime(f.dt, offset, "hh:mm a"),
			icon: iconUrlFromCode(f.weather[0].icon),
			date: f.dt_txt,
		}))
		.slice(0,5)

		//daily
		const daily = data
		.filter((f) => f.dt_txt.slice(-8) === "00:00:00")
		.map((f) => ({
			temp: f.main.temp,
			title: formatToLocalTime(f.dt, offset, "ccc"),
			icon: iconUrlFromCode(f.weather[0].icon),
			date: f.dt_txt,
		}));

		return { hourly, daily }
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