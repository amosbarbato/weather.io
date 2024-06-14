export const Forecast = ({ data }) => {

	return (
		<div className="card">
			<ul className='forecast' data-forecast-list>
				
				{data.map((d, index) => (
					<li key={index} className='forecast__item' >
						<h6 className="bold semi">{d.title}</h6>	
						<h6 className="bold full">{d.titleFull}</h6>	
						<img className="forecast-icon" src={d.icon} alt="" />

						<div className="forecast__item__temp">
							<p className="bold">
								<span>{`${d.temp.toFixed()}`}&deg;c</span>
							</p>
						</div>
					</li>
				))}
				
			</ul>
		</div>
	)
}