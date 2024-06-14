import { useEffect, useState } from 'react'
import getFormattedWeatherData from './services/weatherService'

import { Actions } from './components/Actions'
import { CurrentWeather } from './components/CurrentWeather'
import { Highlight } from './components/Highlight'
import { Forecast } from './components/Forecast'


const App = () => {
	const [query, setQuery] = useState({ q: "rio de janeiro" })
	const [units] = useState("metric")
	const [weather, setWeather] = useState(null)

	const getWeather = async () => {
		await getFormattedWeatherData({ ...query, units }).then((data) => {
			setWeather(data)
		})
	}

	useEffect(() => {
		getWeather()
	}, [query, units])


	return (
		<div className="App">
				<main>
					<article className='container'>

						{weather && (
							<>						
								<div className="content-left card">
									<Actions setQuery={setQuery} />
									<CurrentWeather weather={weather} />
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
