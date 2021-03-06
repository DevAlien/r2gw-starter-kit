import fetch from "isomorphic-fetch";

export const SET_PAGE = "SET_PAGE";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_LIST = "RECEIVE_LIST";

export function setPage (nowPage) {
	return {
		type: SET_PAGE,
		nowPage
	}
}

export function nextPage (nowPage) {
	return {
		type: NEXT_PAGE,
		nowPage
	};
}
export function prevPage (nowPage) {
	return {
		type: PREV_PAGE,
		nowPage
	};
}

function receivePost (json) {
	return {
		type: RECEIVE_POST,
		post: {
			title: json.title,
			body: json.body
		}
	}
}

export function fetchPost (id) {
	return dispatch => {
		return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
			.then(response => response.json())
			.then(json => dispatch(receivePost (json)));
	}
}

function receiveList (json) {
	return {
		type: RECEIVE_LIST,
		list: json
	}
}

export function fetchList () {
	return dispatch => {
		return fetch(`http://jsonplaceholder.typicode.com/posts`)
			.then(response => response.json())
			.then(json => dispatch(receiveList (json)));
	} 
}