import '../styles.scss'


export const CurrentWeather = ({
	weather: {
		formattedLocalTime, 
		name, 
		country, 
		details, 
		icon,
		temp
	},
}) => {

	return (
		<div className="card-lg current-weather-card">
			<div className="card-header">
				<h2 className='heading-md card-title'>{formattedLocalTime}</h2>
				<p className='text-md heading'>{`${name}, ${country}`}</p>
			</div>

			<div className="wrapper">
				<div className="weather">
					<h1 className='heading-xl weather'>{`${temp.toFixed()}`}&deg;c</h1>
					<p className='text-lg weather'>{details}</p>
				</div>
					<img src={icon}  alt="Clear" className={details}/>
			</div>
		</div>
	)
}