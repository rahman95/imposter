import { Link } from 'react-router-dom'
import './App.css'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<nav>
					<Link to="/join">Join Game</Link>
					<Link to="/host">Host Game</Link>
				</nav>
			</header>
		</div>
	)
}

export default App
