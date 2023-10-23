import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Data from './components/Data'
import Countries from './components/Hero'
import Nav from './components/Nav'
import './App.css'

function App() {
	return (
		<>
			<Nav />

			{Data.map(props => (
				<Countries
					key={props.id}
					title={props.title}
					location={props.location}
					googleMapsUrl={props.googleMapsUrl}
					startDate={props.startDate}
					endDate={props.endDate}
					description={props.description}
					imageUrl={props.imageUrl}
				/>
			))}
		</>
	)
}

export default App
