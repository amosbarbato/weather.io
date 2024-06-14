import { useState } from 'react'

import { MagnifyingGlass } from "@phosphor-icons/react"

export const Actions = ({ setQuery }) => {
	const [city, setCity] = useState('')

	const handleSearchClick = () => {
		if (city !== "") setQuery({ q: city })
	}

	
	return (
		<div className="actions">
			<a href="/" className='actions__home'>
				<img src="../logo.svg" alt="" width={30} height={30}/>
			</a>
			
			<div className="actions__search">
				<input 
					value={city}
					onChange={(e) => setCity(e.currentTarget.value)}
					type="search" 
					name='search' 
					placeholder='Search city...' 
					className='actions__search__field'
				/>
				<button onClick={handleSearchClick} className='actions__search__button'>
					<MagnifyingGlass size={24} color='white'/>
				</button>
			</div>
		</div>
	)
}