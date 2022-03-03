import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Help from './Actions/Help'

import './App.css'

const App = () => {
	const [helpModalOpen, setHelpModalOpen] = useState(false)

	const handleButtonClick = () => {
		setHelpModalOpen(true)
	}

	return (
		<div className="app">
			<section className="section">
				<div className="actions">
					<span onClick={handleButtonClick}>?</span>
					<Help isOpen={helpModalOpen} setIsOpen={setHelpModalOpen} />
				</div>
				<h1>Imposter</h1>
				<span className="logo">🃏</span>
				<div className="card-container">
					<span className="card">♥️</span>
					<span className="card">♠️</span>
					<span className="card">♦️</span>
					<span className="card">♣️</span>
				</div>
				<p className="tag-line">
					The game where you find red flags 🚩 in others using your investigative skills 🕵️
				</p>
				<nav>
					<Link to="/join">Join Game</Link>
					<Link to="/host">Host Game</Link>
				</nav>
			</section>
		</div>
	)
}

export default App
