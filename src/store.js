import { createStore } from 'redux';

export default createStore(function (state, action) {
	// 4. Redux에 작업 있을때 실행
	// 5. Redux의 store에 type/size 세팅해놓은값 가져옴
	//test
	// 0. 최초 로딩때는 Redux의 state가 없으므로 undefined임
	if (!state) {
		return { number: 0 }
	}

	// 6. AddNumber.js에서 넘겨준 type/size를 가져와서
	// 기존 Redux의 store에 있는 number + AddNumber.js의 size 더함
	if (action.type === 'INCREMENT') {
		return { ...state, number: state.number + action.size }
	}

	return state;
}, window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__())