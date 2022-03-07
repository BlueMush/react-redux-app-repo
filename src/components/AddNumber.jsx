import React, { useState } from 'react';

function AddNumber() {
	const [number, setNumber] = useState(0);
	const [display, setDisplay] = useState(0);

	return (
		<div>
			<h1>Add Number</h1>
			<button
				onClick={() => { setDisplay(number) }}>+</button>
			<input
				type="number"
				value={number}
				onChange={(e) => { setNumber(e.target.value) }}
			></input>
		</div >
	)
}

export default AddNumber;