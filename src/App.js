import React from 'react'
import './App.css';
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from './components/DisplayNumberRoot';

function App() {
	return (
		<div className="App">
			<h1>Add Number Root</h1>
			<AddNumberRoot></AddNumberRoot>
			<DisplayNumberRoot></DisplayNumberRoot>
		</div>
	);
}

export default App;