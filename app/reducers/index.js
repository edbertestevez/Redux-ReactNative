import { combineReducers } from 'redux';
import people from './people';
import forms from './forms';

const rootReducer = combineReducers({
	//states
	people,
	forms
})

export default rootReducer