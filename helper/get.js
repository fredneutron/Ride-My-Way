
const get = item => {
	if(document.querySelector(item) !== null){
		return document.querySelector(item);
	}else{
		return 'item is null';
	}
}

export default get;