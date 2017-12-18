import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE, CLEAR_LIST} from '../constants'

//initial values
const initialState = {
	people: [],
	page: 1,
	isFetching: false,
	error: false
}

export default function peopleReducer(state = initialState, action){
	//types on Action.js
	switch(action.type){
		case FETCHING_PEOPLE:{
			return{
				...state,
				isFetching: true,
				page: action.newPage
			}
		}
		case FETCHING_PEOPLE_SUCCESS:{
			return{
				...state,
				isFetching: false,
				people: action.data
			}
		}
		case FETCHING_PEOPLE_FAILURE:{
			return{
				...state,
				isFetching: false,
				error: true
			}
		}
		case CLEAR_LIST:{
			return{
				...state,
				people: [],
				page: 1
			}
		}
		default: return state
	}
}