import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
} from '../constants/userContants';

//user list reducer
export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			console.log('a');
			return { loading: true };
		case USER_LOGIN_SUCCESS:
			console.log('b');
			return { loading: false, userInfo: action.payload };
		case USER_LOGIN_FAIL:
			console.log('c');
			return { loading: false, error: action.payload };
		case USER_LOGOUT:
			console.log('d');
			return {};
		default:
			console.log('e');
			return state;
	}
};
