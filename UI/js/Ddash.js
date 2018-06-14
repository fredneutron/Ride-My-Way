let search = document.getElementById('search-bar');
let toggle = () =>{
	let id = document.querySelector('.offer-response-b').id;
	if(id.length > 0){
		for (let i = 0; i < id.length; i++) {
			document.querySelector('#'+id[i]).onclick = () =>{
				document.querySelector('#offer'+id[i]).style.display = "block";
			}
			if(document.querySelector('#offer'+id[i]).style.display = "block"){
				document.querySelector('#offer'+(!id[i])).style.display = "none";
			}
		}
	}
}
// toggle();