import React, { useState } from 'react';
import './App.css';
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from './components/DisplayNumberRoot';

function App() {
	// const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1>Add Number Root</h1>
			<AddNumberRoot></AddNumberRoot>
			<DisplayNumberRoot></DisplayNumberRoot>
			{/* <p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button> */}
		</div>
	);
}

export default App;