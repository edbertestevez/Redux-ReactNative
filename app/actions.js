import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE, CLEAR_LIST, GET_SELECTED, GET_INPUTS} from './constants'
import {ADD_NAME,ADD_GENDER,ADD_HEIGHT,ADD_MASS,ADD_HAIR,ADD_SKIN,ADD_EYE } from './constants'

//ACTUAL actions
//dispatch == store (call function/reducer values)
export function fetchPeopleFromAPI(page, currList){
	return (dispatch) => {
		dispatch(getPeople(page))
		fetch('https://swapi.co/api/people/?page='+page)
			.then(res => res.json())
			.then(json => dispatch(getPeopleSuccess(currList, json.results)))
			.catch(err => dispatch(getPeopleFailure(err)))
	}
}

export function clearPeopleList(){
	return (dispatch) => {
		dispatch(clearList())
	}
}

export function getSelected(selected){
	return (dispatch) => {
		dispatch(getSpecificPeople(selected))
	}
}

export function getFormInputs(inputs){
	console.log("HELLO PO");
	// return (dispatch) =>{
	// 	dispatch(getInputs(inputs))
	// }
}



export function getName(val){return (dispatch) =>{dispatch(addName(val))}}
export function getGender(val){return (dispatch) =>{dispatch(addGender(val))}}
export function getHeight(val){return (dispatch) =>{dispatch(addHeight(val))}}
export function getMass(val){return (dispatch) =>{dispatch(addMass(val))}}
export function getHairColor(val){return (dispatch) =>{dispatch(addHairColor(val))}}
export function getSkinColor(val){return (dispatch) =>{dispatch(addSkinColor(val))}}
export function getEyeColor(val){return (dispatch) =>{dispatch(addEyeColor(val))}}


//TYPES on the reducers (called on pages)
function getPeople(pageNum){
	let newPage = pageNum +1;
	if(newPage<11){
		return{
			type: FETCHING_PEOPLE,
			newPage
		}
	}else{
		alert("No more records available")
	}
}

function getPeopleSuccess(currData, newData){
	//PUSH data sa current data
	let data = [];
	for(var i = 0; i<currData.length; i++){
		var obj = currData[i];
		data.push(obj);
		//console.log(obj)
	}
	for(var i = 0; i<newData.length; i++){
		var obj = newData[i];
		data.push(obj);
		//console.log(obj)
	}
	return{
		type: FETCHING_PEOPLE_SUCCESS,
		data
	}
}

function getPeopleFailure(){
	return{
		type: FETCHING_PEOPLE_FAILURE
	}
}

function clearList(){
	return{
		type: CLEAR_LIST
	}
}

function getSpecificPeople(selected){
	let x = JSON.stringify(selected)
	console.log("SELECTED USER:" + x)
	return{
		type: GET_SELECTED,
		selected
	}
}

function getInputs(inputs){
	//console.log(inputs)
	return{
		type: GET_INPUTS,
		//inputs
	}
}

//ADD FORM INPUTS
function addName(val){return{type: ADD_NAME,val}}
function addGender(val){return{type: ADD_GENDER,val}}
function addHeight(val){return{type: ADD_HEIGHT,val}}
function addMass(val){return{type: ADD_MASS,val}}
function addHairColor(val){return{type: ADD_HAIR,val}}
function addSkinColor(val){return{type: ADD_SKIN,val}}
function addEyeColor(val){return{type: ADD_EYE,val}}

