let dropdown = document.getElementById('dropdown');
document.getElementById('dropdown-toggle').onclick = () =>{
	let n = dropdown.style.display == "block"? dropdown.style.display = "none" : dropdown.style.display = "block";
	// dropdown.style.display = "block";
}
window.onclick = e => {
	if (e.target == dropdown){
		dropdown.style.display = "none";
	}
}