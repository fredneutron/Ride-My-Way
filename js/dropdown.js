let dropdown = document.getElementById('dropdown');
let search = document.getElementById('search-bar');
let topic = document.getElementById('topic');
let notify = document.getElementById('notify');
document.getElementById('dropdown-toggle').onclick = () =>{
	let n = dropdown.style.display == "block"? dropdown.style.display = "none" : dropdown.style.display = "block";
	// dropdown.style.display = "block";
}
document.getElementById('noti').onclick = () => {
	let x = notify.style.display == "block"? notify.style.display = "none" : notify.style.display = "block";
}
if(document.getElementById('search') !== null){
	document.getElementById('search').onclick = () => {
		let destination = document.getElementById('search-box').value;
		if(destination !== ""){
			document.getElementById('ride-offer').style.display = "none";
			search.style.display = "block";
			topic.innerHTML = "Search Result";
		}
	}
}
window.onclick = e => {
	if (e.target == dropdown){
		dropdown.style.display = "none";
	}else if(e.target == notify){
		notify.style.display = "none";
	}
}