import React from 'react';
import './resources/css/App.css'
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

function App() {
	return (
		<div>
			<h1>Root</h1>
			<AddNumberRoot></AddNumberRoot>
			<DisplayNumberRoot></DisplayNumberRoot>
		</div>
	)
}

export default App;