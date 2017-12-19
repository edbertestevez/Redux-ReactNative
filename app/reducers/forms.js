import {GET_INPUTS,ADD_NAME,ADD_GENDER,ADD_HEIGHT,ADD_MASS,ADD_HAIR,ADD_SKIN,ADD_EYE } from '../constants'

//initial values
const initialState = {
	addForm:{
		name: '',
		gender: 'male',
		height: '',
		mass: '',
		hair_color: '',
		skin_color: '',
		eye_color: ''
	}
}

export default function formReducer(state = initialState, action){
	//types on Action.js
	switch(action.type){
		case GET_INPUTS:{
			return {
				...state,
				//action.inputs
			}
		}
		case ADD_NAME: 
			return{ 
				...state, 
				addForm:{
					name: action.val,
					gender: state.addForm.gender,
					height: state.addForm.height,
					mass: state.addForm.mass,
					hair_color: state.addForm.hair_color,
					skin_color: state.addForm.skin_color,
					eye_color: state.addForm.eye_color
				}
			}

		case ADD_GENDER: 
			return{ 
				...state, 
				addForm:{
					name: state.addForm.name,
					gender: action.val,
					height: state.addForm.height,
					mass: state.addForm.mass,
					hair_color: state.addForm.hair_color,
					skin_color: state.addForm.skin_color,
					eye_color: state.addForm.eye_color
				}
			}
		case ADD_HEIGHT: 
			return{ 
				...state, 
				addForm:{
					name: state.addForm.name,
					gender: state.addForm.gender,
					height: action.val,
					mass: state.addForm.mass,
					hair_color: state.addForm.hair_color,
					skin_color: state.addForm.skin_color,
					eye_color: state.addForm.eye_color
				}
			}
		case ADD_MASS: 
			return{ 
				...state, 
				addForm:{
					name: state.addForm.name,
					gender: state.addForm.gender,
					height: state.addForm.height,
					mass: action.val,
					hair_color: state.addForm.hair_color,
					skin_color: state.addForm.skin_color,
					eye_color: state.addForm.eye_color
				}
			}
		case ADD_HAIR: 
			return{ 
				...state, 
				addForm:{
					name: state.addForm.name,
					gender: state.addForm.gender,
					height: state.addForm.height,
					mass: state.addForm.mass,
					hair_color: action.val,
					skin_color: state.addForm.skin_color,
					eye_color: state.addForm.eye_color
				}
			}
		case ADD_SKIN: 
			return{ 
				...state, 
				addForm:{
					name: state.addForm.name,
					gender: state.addForm.gender,
					height: state.addForm.height,
					mass: state.addForm.mass,
					hair_color: state.addForm.hair_color,
					skin_color: action.val,
					eye_color: state.addForm.eye_color
				}
			}
		case ADD_EYE: 
			return{ 
				...state, 
				addForm:{
					name: state.addForm.name,
					gender: state.addForm.gender,
					height: state.addForm.height,
					mass: state.addForm.mass,
					hair_color: state.addForm.hair_color,
					skin_color: state.addForm.skin_color,
					eye_color: action.val
				}
			}
		default: return state
	}
}