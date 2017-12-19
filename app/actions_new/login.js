export function validateForm(data) {
	return{
		type: 'Nmae',
		data
	}
}

export function validateForm(data) {
	return(dispatch, getState) => {
		console.log(getState());
	}
}

export function validateForm(data) {
	return(dispatch, getState) => {
		dispatch(newForm());
	}
}


export function newForm() {
	return {
		type: 'Nmae',
		data
	}
}