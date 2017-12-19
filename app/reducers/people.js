import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE, CLEAR_LIST, GET_SELECTED, GET_INPUTS} from '../constants'

//initial values
const initialState = {
	people: [],
	page: 1,
	isFetching: false,
	error: false,
	selected:{
		name: '',
		gender: '',
		height: '',
		mass: '',
		hair_color: '',
		skin_color: '',
		eye_color: ''
	}
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
		}break;
		case FETCHING_PEOPLE_SUCCESS:{
			return{
				...state,
				isFetching: false,
				people: action.data
			}
		}break;
		case FETCHING_PEOPLE_FAILURE:{
			return{
				...state,
				isFetching: false,
				error: true
			}
		}break;
		case CLEAR_LIST:{
			return{
				...state,
				people: [],
				page: 1
			}
		}break;
		case GET_SELECTED:{
			return{
				...state,
				selected:{
					name: action.selected.name,
					gender: action.selected.gender,
					height: action.selected.height,
					mass: action.selected.mass,
					hair_color: action.selected.hair_color,
					skin_color: action.selected.skin_color,
					eye_color: action.selected.eye_color
				}

			}
		}break;
		default: return state
	}
}