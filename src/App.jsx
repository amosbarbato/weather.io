/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useEffect, useState } from 'react'
import { Highlight } from './components/Highlight'
import getFormattedWeatherData from './services/weatherService'

import './styles.scss'
import { Forecast } from './components/Forecast'
import { Header } from './components/Header'
import { CurrentWeather } from './components/CurrentWeather'



const App = () => {

	const [query, setQuery] = useState({ q: "rio de janeiro" })
	const [units, setUnits] = useState("metric")
	const [weather, setWeather] = useState(null)


	const getWeather = async () => {
		await getFormattedWeatherData({ ...query, units }).then((data) => {
			setWeather(data)
		})
	}

	useEffect(() => {
		getWeather()
	}, [query, units])

	const formatBackground = () => {
		if (!weather) return "bg-cold"
		const threshold = units === "metric" ? 20 : 60
		if (weather.temp <= threshold) return "bg-cold"
		return "bg-hot"
	}

	return (
		<div className="App">
				<main>
					<article className='container'>

						{weather && (
							<>
							
								<div className="content-left card">
									<Header setQuery={setQuery} />		
											
									<section className={` section current-weather ${formatBackground()} `}>
										<CurrentWeather weather={weather} />
									</section>
								</div>

								<div className="content-right container">
									<Highlight weather={weather} />
									<Forecast data={weather.daily} /> 
								</div>
							</>
						)}
						
					</article>
				</main>
		</div>
	)
}

export default App
