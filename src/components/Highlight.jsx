import { 
	Sun, 
	Moon,
	ThermometerSimple, 
	Drop, 
	Wind } from "@phosphor-icons/react"

export const Highlight = ({
	weather: {
		feels_like,
		speed,
		humidity,
		sunset,
		sunrise
	}
}) => {

	
	return (
		<div className="card">
			<div className="wrapper">
				<ul className="highlight">
					<li className="highlight__item">
						<div className="highlight__item__label">
							<ThermometerSimple width={24} height={24}/>
							<p className="bold">Feels Like</p>
						</div>
						<h5 className="bold">{`${feels_like.toFixed()}`}&deg;c</h5>
					</li>
					<li className="highlight__item">
						<div className="highlight__item__label">
							<Wind width={24} height={24} />
							<p className="bold">Speed</p>
						</div>
						<h5 className="bold">{`${speed.toFixed()}`} km/h</h5>
					</li>
					<li className="highlight__item">
						<div className="highlight__item__label">
							<Drop width={24} height={24}/>
							<p className="bold">Humidity</p>
						</div>
						<h5 className="bold">{`${humidity.toFixed()}`}%</h5>
					</li>
					<li className="highlight__item">
						<div className="highlight__item__label">
							<Sun width={24} height={24}/>
							<p className="bold">Sunrise</p>
						</div>
						<h5 className="bold">{sunrise}</h5>
					</li>
					<li className="highlight__item">
						<div className="highlight__item__label">
							<Moon width={24} height={24}/>
							<p className="bold">Sunset</p>
						</div>
						<h5 className="bold">{sunset}</h5>
					</li>					
				</ul>
			</div>
		</div>
	)
}