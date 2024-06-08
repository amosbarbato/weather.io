import '../styles.scss'

export const Forecast = ({data}) => {

	return (
		<div className="card">
			<ul className='forecast' data-forecast-list>
				
				{data.map((d, index) => (
					<li key={index} className='forecast-item' >
						<p className="heading-xs">{d.title}</p>	
						
						<img src={d.icon} alt="" />
						
						<p className="heading-sm">{`${d.temp.toFixed()}`}&deg;c</p>
					</li>
				))}
{/* 



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
				</li> */}

			</ul>
		</div>
	)
}