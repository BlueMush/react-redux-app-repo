import React from 'react';
import './resources/css/App.css'
import AddNumberRoot from './components/addNumber/AddNumberRoot';
import DisplayNumberRoot from './components/displayNumber/DisplayNumberRoot';

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