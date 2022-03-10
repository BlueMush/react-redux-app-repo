import React, { useState } from 'react';
import store from '../store';

export default function AddNumber(props) {
	const [reactStateNumber, setReactStateNumber] = useState(0);

	return (
		<div>
			<h1>Add Number</h1>
			<input
				type="button"
				value="+"
				onClick={() => {
					// react
					// props.onClick(number);

					// 2. React의 AddNumber.js의 state에 있는 number를
					// 3. Redux의 store.js에 dispatch(publish)
					store.dispatch({ type: 'INCREMENT', size: reactStateNumber });
				}}

			></input>
			<input
				type="number"
				value={reactStateNumber}
				onChange={(e) => {
					// 1. React의 AddNumber.js의 state에 있는 number 값을 설정
					setReactStateNumber(Number(e.target.value));
				}}></input>
		</div >
	)
}