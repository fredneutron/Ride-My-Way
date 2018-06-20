const getId = (array,arrayValue, name) => {
	if(typeof array !== "undefined" & typeof name !== "undefined"){
			for (let i = 0; i < array.length; i++) {
				let n = array[i][arrayValue] == name ? i : 0;
			}
	}
}

export default getId;