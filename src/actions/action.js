/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from 'axios';
export const FETCH_FINISH = 'FETCH_FINISH';
export const ADD_JEDI = 'ADD_JEDI';

function getJedi (list){
	return {
		type: FETCH_FINISH,
		list
	}
}

export function fetchJedi(list) {
	return dispatch => {
		axios.get('http://localhost:3001/jedi')
			.then((res) => {
				//console.log(res)
				dispatch(getJedi(res.data))
			})
			.catch(error => {
				console.log(error)
			});
	}
}

function addJedi(list) {
	return {
		type: ADD_JEDI,
		list
	}
}

export function newJedi (list) {
	return dispatch => {
		axios.post('http://localhost:3001/jedi',{name: list})
		.then(response => {
			dispatch(addJedi(response.data))
		})
		.catch(error => {
			console.log(error);
		});
	}
}
