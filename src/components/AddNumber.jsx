import React, { useState } from 'react';

function AddNumber(props) {
	const [number, setNumber] = useState(0);
	// const [display, setDisplay] = useState(0);

	return (
		<div>
			<h1>Add Number</h1>
			<input
				type="button"
				value="+"
				onClick={() => {
					props.onClick(number);
				}}
			></input>
			<input
				type="number"
				value={number}
				onChange={(e) => {
					setNumber(Number(e.target.value));
				}}></input>
		</div >
	)
}

export default AddNumber;