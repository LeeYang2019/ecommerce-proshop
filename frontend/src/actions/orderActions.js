import axios from 'axios';
import {
	ORDER_CREATE_FAIL,
	ORDER_CREATE_SUCCESS,
	ORDER_CREATE_REQUEST,
} from '../constants/orderConstants';

export const createOrder = (order) => async (dispatch, getState) => {
	console.log('inside order action');
	try {
		dispatch({
			type: ORDER_CREATE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();
		console.log(userInfo);

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};
		console.log('line 26');
		const { data } = await axios.post(`/api/orders`, order, config);
		console.log(data);
		dispatch({
			type: ORDER_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;

		dispatch({
			type: ORDER_CREATE_FAIL,
			payload: message,
		});
	}
};
