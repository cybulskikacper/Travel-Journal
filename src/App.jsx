import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './components/Data'
import Countries from './components/Hero'
import Nav from './components/Nav'
import './App.css'

function App() {
	return (
		<>
			<Nav />
			<Countries />
		</>
	)
}

export default App
