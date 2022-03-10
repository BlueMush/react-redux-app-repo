import React, { useState } from 'react'
import DisplayNumber from '../containers/DisPlayNumberContainer';

function DisplayNumberRoot(props) {
	return (
		<div>
			<h1>Add Number Root</h1>
			<DisplayNumber
			// number={props.number}
			></DisplayNumber>
		</div >
	)
}

export default DisplayNumberRoot;