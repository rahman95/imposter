import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './components/App'
import RouteNotFound from './components/RouteNotFound'
import Join from './components/Join/Join'
import Host from './components/Host/Host'
import Play from './components/Play/Play'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="join" element={<Join />} />
				<Route path="host" element={<Host />} />
				<Route path="play" element={<Play />} />
				<Route path="*" element={<RouteNotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
)
