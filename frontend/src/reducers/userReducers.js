import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_REQUEST,
	USER_REGISTER_FAIL,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_SUCCESS,
	USER_UPDATE_PROFILE_FAIL,
	// USER_UPDATE_PROFILE_RESET,
	USER_LIST_REQUEST,
	USER_LIST_SUCCESS,
	USER_LIST_FAIL,
	USER_LIST_RESET,
} from '../constants/userContants';

//user list reducer
export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return { loading: true };
		case USER_LOGIN_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_LOGIN_FAIL:
			return { loading: false, error: action.payload };
		case USER_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return { loading: true };
		case USER_REGISTER_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_REGISTER_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userDetailsReducer = (state = { user: {} }, action) => {
	switch (action.type) {
		case USER_DETAILS_REQUEST:
			console.log('a');
			return { ...state, loading: true };
		case USER_DETAILS_SUCCESS:
			console.log('b');
			return { loading: false, user: action.payload };
		case USER_DETAILS_FAIL:
			console.log('c');
			return { loading: false, error: action.payload };
		default:
			console.log('d');
			return state;
	}
};

export const userUpdateProfileReducer = (state = { user: {} }, action) => {
	switch (action.type) {
		case USER_UPDATE_PROFILE_REQUEST:
			console.log('a');
			return { ...state, loading: true };
		case USER_UPDATE_PROFILE_SUCCESS:
			console.log('b');
			return { loading: false, success: true, userInfo: action.payload };
		case USER_UPDATE_PROFILE_FAIL:
			console.log('c');
			return { loading: false, error: action.payload };
		default:
			console.log('d');
			return state;
	}
};

export const userListReducer = (state = { users: [] }, action) => {
	switch (action.type) {
		case USER_LIST_REQUEST:
			console.log('a');
			return { ...state, loading: true };
		case USER_LIST_SUCCESS:
			console.log('b');
			return { loading: false, users: action.payload };
		case USER_LIST_FAIL:
			console.log('c');
			return { loading: false, error: action.payload };
		case USER_LIST_RESET:
			console.log('c');
			return { users: [] };
		default:
			console.log('d');
			return state;
	}
};
