import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
	switch (action.type) {
		case DELETE_POST:
			return _.omit(state, action.payload); //action.payload will be the id of the post which was deleted, this is pasted through in the action creator function as its payload.
			// this is good practice as it will immediately remove this from our local state so it does not briefly show up on the index page when they are rerouted.
		case FETCH_POST:
			// const post = action.payload.data;
			// const newState = {...state };
			// newState[post.id] = post
			// return newState;
			return { ...state, [action.payload.data.id]: action.payload.data };
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}