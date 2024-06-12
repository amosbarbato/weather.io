import '../styles.scss'

export const Forecast = ({ data }) => {

	return (
		<div className="card">
			<ul className='forecast' data-forecast-list>
				
				{data.map((d, index) => (
					<li key={index} className='forecast-item' >
						<p className="heading-sm day">{d.title}</p>	
						
						<img src={d.icon} alt="" />

						<div className="temp-max-min">
							<p className="heading-sm">{`${d.temp.toFixed()}`}&deg;c</p>
							<p className="heading-sm max">{`${d.feels_like.toFixed()}`}&deg;c</p>
						</div>
					</li>
				))}
				
			</ul>
		</div>
	)
}