/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useEffect, useState } from 'react'
import { Highlight } from './components/Highlight'
import getFormattedWeatherData from './services/weatherService'

import './styles.scss'
import { MagnifyingGlass } from "@phosphor-icons/react"

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
									<Forecast weather={weather} data={weather.daily} /> 
								</div>


								{/* <section className="load-search">

									<div className="header">
										<a href="#" className='logo'>
											<img src="../logotype.svg" alt=""/>
										</a>
									</div>

									<div className="load-search-content">
										<div className="welcome">
											<h2 className="heading-md">Boas vindas ao <span>TypeWeather</span></h2>
											<p className='text-md'>Escolha um local para ver a previsão do tempo</p>
										</div>

										<div className="search-view">
											<input 
												// value={city}
												// onChange={(e) => setCity(e.currentTarget.value)}
												type="search" 
												name='search' 
												placeholder='Buscar local' 
												className='search-field'
											/>
											<button>
												<MagnifyingGlass size={24} color='white'/>
											</button>
										</div>

										<div className="search-result ">
											<ul className="view-list">

												<li className="view-item">
													<p className="text-md">Porto Alegre, RS - Brasil</p>
													<a href="#" className="item-link"></a>
												</li>

												<li className="view-item">
													<p className="text-md">Porto Seguro, BA - Brasil</p>
													<a href="#" className="item-link"></a>
												</li>

												<li className="view-item">
													<p className="text-md">Porto - Portugal</p>
													<a href="#" className="item-link"></a>
												</li>
											</ul>
										</div>
									</div>

									
								</section> */}
							</>
							
						)}
						
						
						<div className="loading"></div>

					</article>
				</main>
		</div>
	)
}

export default App
