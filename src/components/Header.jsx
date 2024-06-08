import { useState } from 'react'
import '../styles.scss'

import { MagnifyingGlass } from "@phosphor-icons/react"

export const Header = ({ setQuery }) => {
	const [city, setCity] = useState('')

	const handleSearchClick = () => {
		if (city !== "") setQuery({ q: city })
	}

	const handleLocationClick = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const {latitude, longitude} = position.coords
				setQuery({lat: latitude, lon: longitude})
			})
		}
	}

	return (
		<div className="header">
			<a href="#" className='logo'>
				<img src="./public/logo.svg" alt="" width={40} height={40}/>
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
				<MagnifyingGlass 
					size={30}
					onClick={handleSearchClick}
				/>
			</div>
		</div>
	)
}