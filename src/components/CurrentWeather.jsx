import '../styles.scss'


export const CurrentWeather = ({
	weather: {
		formattedLocalTime,
		formattedTime,
		name, 
		country, 
		details, 
		icon,
		bg,
		temp,
		temp_min,
		temp_max,
	},
}) => {

	return (
		<>

			<section className='section current-weather' style={{ backgroundImage: `url(${bg})` }}>
				<div className="card-lg current-weather-card" >
					<div className="card-header">
						<div className='local'>
							<h2 className='heading-md card-title'>{formattedLocalTime}</h2>
							<p className='text-md heading'>{`${name}, ${country}`}</p>
						</div>
						<div className="clock">
							<h1>{formattedTime}</h1>
						</div>
					</div>

					<div className="wrapper">
						<div className="weather">
							<h1 className='heading-xl weather'>{`${temp.toFixed()}`}&deg;c</h1>

							<div className="sub-wrapper">
								<p className='temp-max-min heading-sm'>
									{`${temp_min.toFixed()}`}&deg;c / {`${temp_max.toFixed()}`}&deg;c
								</p>
								<p className='text-lg weather'>{details}</p>
							</div>
						</div>
						<img src={icon}  alt={details} className="weather-icon" />
					</div>
				</div>
			</section>

		</>
	)
}