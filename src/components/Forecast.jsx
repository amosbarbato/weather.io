import '../styles.scss'

export const Forecast = ({
	data,
	weather: {
		temp_min,
		temp_max
	}
}) => {

	return (
		<div className="card">
			<ul className='forecast' data-forecast-list>
				
				{data.map((d, index) => (
					<li key={index} className='forecast-item' >
						<p className="heading-sm day">{d.title}</p>	
						
						<img src={d.icon} alt="" />

						<div className="temp-max-min">
							<p className="heading-sm">{`${temp_min.toFixed()}`}&deg;c</p>
							<p className="heading-sm max">{`${temp_max.toFixed()}`}&deg;c</p>
						</div>
					</li>
				))}
				
			</ul>
		</div>
	)
}