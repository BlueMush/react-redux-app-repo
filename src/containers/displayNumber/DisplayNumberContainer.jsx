import DisplayNumber from '../../components/DisplayNumber';
import { connect } from 'react-redux';

function mapReduxStateToReactProps(state) {
	return {
		number: state.number
	}
}

function mapReduxDispatchToReactProps() {
	return {

	}
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNumber);

// import React, { useState } from 'react';
// import store from "../store"

// function Component() {
// 	const [reactStateNumber, setReactStateNumber] = useState(0);

// 	store.subscribe(() => {
// 		setReactStateNumber(store.getState().number);
// 	});

// 	return (
// 		<div>
// 			<h1>DisPlay Number Root Contaioner</h1>
// 			<DisplayNumber number={reactStateNumber}></DisplayNumber>
// 		</div>
// 	)
// }

// export default Component;