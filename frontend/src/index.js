import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './components/App'
import Join from './components/Join/Join'
import Host from './components/Host/Host'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="join" element={<Join />} />
				<Route path="host" element={<Host />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
)
