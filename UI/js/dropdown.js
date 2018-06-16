let dropdown = document.getElementById('dropdown');
let search = document.getElementById('search-bar');
let topic = document.getElementById('topic');
document.getElementById('dropdown-toggle').onclick = () =>{
	let n = dropdown.style.display == "block"? dropdown.style.display = "none" : dropdown.style.display = "block";
	// dropdown.style.display = "block";
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
	}
}