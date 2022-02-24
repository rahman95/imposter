import { Link } from 'react-router-dom'
import './App.css'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Imposter</h1>
				<span className="logo">🃏</span>
				<p>Play the Mafia card game online!</p>
				<nav>
					<Link to="/join">Join Game</Link>
					<Link to="/host">Host Game</Link>
				</nav>
			</header>
		</div>
	)
}

export default App
