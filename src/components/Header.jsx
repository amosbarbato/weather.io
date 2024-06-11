import { useState } from 'react'
import '../styles.scss'

import { MagnifyingGlass } from "@phosphor-icons/react"

export const Header = ({ setQuery }) => {
	const [city, setCity] = useState('')

	const handleSearchClick = () => {
		if (city !== "") setQuery({ q: city })
	}

	// const handleLocationClick = () => {
	// 	if (navigator.geolocation) {
	// 		navigator.geolocation.getCurrentPosition((position) => {
	// 			const {latitude, longitude} = position.coords
	// 			setQuery({lat: latitude, lon: longitude})
	// 		})
	// 	}
	// }

	return (
		<div className="header">
			<a href="/" className='logo'>
				<img src="../logo.svg" alt="" width={30} height={30}/>
			</a>
			
			<div className="search-view">
				<input 
					value={city}
					onChange={(e) => setCity(e.currentTarget.value)}
					type="search" 
					name='search' 
					placeholder='Search city...' 
					className='search-field'
				/>
				<button onClick={handleSearchClick}>
					<MagnifyingGlass size={24} color='white'/>
				</button>
			</div>
		</div>
	)
}