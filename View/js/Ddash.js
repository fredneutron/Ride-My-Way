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
let toggle = (word,classname) =>{
	let id = document.getElementsByClassName(classname);
	if(id.length > 0){
		for (let i = 0; i < id.length; i++) {
			document.getElementById(id[i].id).onclick = () =>{
				if(document.getElementById(word+id[i].id).style.display == "block"){
					document.getElementById(word+(id[i].id)).style.display = "none";
				}else{
					document.getElementById(word+id[i].id).style.display = "block";
				}
			}
			
		}
	}
}
 toggle('offer','offer-response-b');