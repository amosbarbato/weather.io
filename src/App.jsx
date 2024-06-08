
import './styles.scss'

import { SunDim, ThermometerSimple, Drop, CloudRain, Wind } from "@phosphor-icons/react"

function App() {

	return (
		<div className="App">
				<main>
					<article className='container'>

						<div className="content-left card">

							<div className="header">
								<a href="#" className='logo'>
									<img src="./public/logo.svg" alt="" width={40} height={40}/>
								</a>
								
								<div className="search-view">
									<input type="search" name='search' placeholder='Search city...' className='search-field'/>
								</div>
							</div>

							<section className='section current-weather'>
								<div className="card-lg current-weather-card">
									<div className="card-header">
										<h2 className='heading-md card-title'>Porto Alegre, RS</h2>
										<p className='text-md heading'>Segunda-feira, 15 de maio de 2023</p>
									</div>

									<div className="wrapper">
										<div className="weather">
											<h1 className='heading-xl weather'>28&deg;c</h1>
											<p className='text-lg weather'>Poucas Nuvens</p>
										</div>
											<img src="./src/assets/weather-icons/06n.png"  alt="Clear" className='weather-icon'/>
									</div>
								</div>
							</section>
						</div>

						<div className="content-right container">
							<div className="card">
								<div className="wrapper">
									<ul className="highlight">
										<li className="card-item">
											<div className="label-item">
												<ThermometerSimple width={24} height={24}/>
												<p className="heading-sm">Sensação térmica</p>
											</div>
											<p className="heading-md title-1">26&deg;c</p>
										</li>
										<li className="card-item">
											<div className="label-item">
												<CloudRain width={24} height={24}/>
												<p className="heading-sm">Probabilidade de Chuva</p>
											</div>
											<p className="heading-md title-1">8%</p>
										</li>
										<li className="card-item">
											<div className="label-item">
												<Wind width={24} height={24} />
												<p className="title-1">Velocidade do vento</p>
											</div>
											<p className="heading-md title-1">8 km/h</p>
										</li>
										<li className="card-item">
											<div className="label-item">
												<Drop width={24} height={24}/>
												<p className="title-1">Umidade do ar</p>
											</div>
											<p className="heading-md title-1">40%</p>
										</li>
										<li className="card-item">
											<div className="label-item">
												<SunDim width={24} height={24}/>
												<p className="title-1">Índice UV</p>
											</div>
											<p className="heading-md title-1">5</p>
										</li>
									</ul>
								</div>
							</div>

							<div className="card">
							<ul className='forecast' data-forecast-list>
								
								<li className="forecast-item">
									<p className="heading-xs">Ter</p>								
									<img src="./src/assets/weather-icons/06d.png" alt="" />
									<p className="heading-sm">25&deg;c</p>
								</li>

								<li className="forecast-item">
									<p className="heading-xs">Qua</p>
									<img src="./src/assets/weather-icons/06d.png" alt="" />
									<p className="heading-sm">25&deg;c</p>
								</li>

								<li className="forecast-item">
									<p className="heading-xs">Qui</p>
									<img src="./src/assets/weather-icons/06d.png" alt="" />
									<p className="heading-sm">25&deg;c</p>
								</li>

								<li className="forecast-item">
									<p className="heading-xs">Sex</p>
									<img src="./src/assets/weather-icons/06d.png" alt="" />
									<p className="heading-sm">25&deg;c</p>
								</li>

								<li className="forecast-item">
									<p className="heading-xs">Sab</p>
									<img src="./src/assets/weather-icons/06d.png" alt="" />
									<p className="heading-sm">25&deg;c</p>
								</li>

							</ul>
							</div>
						</div>
					</article>
				</main>
		</div>
	)
}

export default App
