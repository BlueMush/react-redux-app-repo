import AddNumber from "../components/AddNumber";
import React, { useState } from 'react';
import store from '../store';

function Component() {
	return <AddNumber onClick={(size) => {
		store.dispatch({ type: 'INCREMENT', size: size });
	}}></AddNumber>
}

export default Component;