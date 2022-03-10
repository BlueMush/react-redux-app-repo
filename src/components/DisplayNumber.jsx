import React, { useState } from 'react';
import store from "../store"


function DisplayNumber() {
	const [reactStateNumber, setReactStateNumber] = useState(0);

	// 7. Redux의 Number 구독
	store.subscribe(() => {
		// 8. Redux의 number를 store에서 가져와서 React의 state에 있는 number에 저장
		let reduxStoredNumber = store.getState().number;
		setReactStateNumber(reduxStoredNumber);
	});

	return (
		<div>
			<h1>Display Number</h1>
			<input type="text" value={reactStateNumber}></input>
		</div>
	)
}

export default DisplayNumber;