import '../styles.scss'

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
					<li className="card-item">
						<div className="label-item">
							<ThermometerSimple width={24} height={24}/>
							<p className="heading-sm">Feels Like</p>
						</div>
						<p className="heading-md title-1">{`${feels_like.toFixed()}`}&deg;c</p>
					</li>
					<li className="card-item">
						<div className="label-item">
							<Wind width={24} height={24} />
							<p className="heading-sm">Speed</p>
						</div>
						<p className="heading-md title-1">{`${speed.toFixed()}`} km/h</p>
					</li>
					<li className="card-item">
						<div className="label-item">
							<Drop width={24} height={24}/>
							<p className="heading-sm">Humidity</p>
						</div>
						<p className="heading-md title-1">{`${humidity.toFixed()}`}%</p>
					</li>
					<li className="card-item">
						<div className="label-item">
							<Sun width={24} height={24}/>
							<p className="heading-sm">Sunrise</p>
						</div>
						<p className="heading-md title-1">{sunrise}</p>
					</li>
					<li className="card-item">
						<div className="label-item">
							<Moon width={24} height={24}/>
							<p className="heading-sm">Sunset</p>
						</div>
						<p className="heading-md title-1">{sunset}</p>
					</li>					
				</ul>
			</div>
		</div>
	)
}