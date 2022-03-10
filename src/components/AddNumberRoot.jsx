import React, { useState } from "react"
import AddNumber from "./AddNumber"

function AddNumberRoot(props) {
	const [mainNumber, setMainNumber] = useState(0);
	return (
		<div>
			<h1>Add Number Root</h1>
			<AddNumber
			// react
			// onClick={(number) => {
			// 	props.onClick(number);
			// }}
			></AddNumber>
		</div>
	)
}

export default AddNumberRoot;