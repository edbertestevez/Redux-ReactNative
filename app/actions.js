import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE, CLEAR_LIST} from './constants'

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