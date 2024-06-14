
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

			<section 
				className='currentWeather' 
				style={{ backgroundImage: `url(${bg})` }}
			>
				<div className="currentWeather__card" >
					<div className="currentWeather__card__header">

						<div className='local-date'>
							<h4 className="bold">{`${name}, ${country}`}</h4>
							<p>{formattedLocalTime}</p>
						</div>

						<p className="localTime bold">{formattedTime}</p>
					</div>

					<div className="currentWeather__card__wrapper">

						<div className="weather">
							<h1 className='extra'>{`${temp.toFixed()}`}&deg;c</h1>

							<div className="weather__sub">
								<p className='bold'>{`${temp_min.toFixed()}`}&deg;c / {`${temp_max.toFixed()}`}&deg;c</p>
								<span>•</span>
								<p>{details}</p>
							</div>
							
						</div>

						<div className="weather-icon">
							<img src={icon} alt={details} />
						</div>

					</div>
				</div>
			</section>

		</>
	)
}