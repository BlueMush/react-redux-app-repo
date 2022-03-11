import AddNumber from '../../components/addNumber/AddNumber';
import { connect } from 'react-redux';
function mapDispatchToProps(dispatch) {
	return {
		onClick: (size) => {
			dispatch({
				type: 'INCREMENT',
				size: size
			});
		}
	}
}

export default connect(null, mapDispatchToProps)(AddNumber);

// import React, { useState } from 'react';
// import store from '../store';

// function Component() {
// 	return <AddNumber onClick={(size) => {
// 		store.dispatch({ type: 'INCREMENT', size: size });
// 	}}></AddNumber>
// }

// export default Component;