let add = document.getElementById('add');
let offer = document.getElementById('offer123')
document.getElementById('ride-add').onclick = () =>{
	add.style.display = "block";
}
document.getElementsByClassName('close')[0].onclick = () =>{
    add.style.display = "none";
}
window.onclick = e => {
	if (e.target == add) {
		add.style.display = "none";
	}
}
let toggle = () =>{
	let id = document.getElementsByClassName('offer-response-b');
	if(id.length > 0){
		for (let i = 0; i < id.length; i++) {
			document.getElementById(id[i].id).onclick = () =>{
				if(document.getElementById('offer'+id[i].id).style.display == "block"){
					document.getElementById('offer'+(id[i].id)).style.display = "none";
				}else{
					document.getElementById('offer'+id[i].id).style.display = "block";
				}
			}
			
		}
	}
}
 toggle();