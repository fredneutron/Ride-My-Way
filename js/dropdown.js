let get = name => (document.querySelector(name));
let dropdown = get('#dropdown');
let search = get('#search-bar');
let topic = get('#topic');
let notify = get('#notify');
let search1 = get('#search-bar');
let searchBox = get('#search-box');
get('#search').onclick = () => {
	searchBox.style.display = "block";
	get('#search-b').onclick = () => {
		let loco = get('location').value;
		let destination = get('destination').value;
		search.style.display = "block";
	}
}
let closeModel = () => {
	let n = document.getElementsByClassName('close');
	for(i = 0; i < n.length; i += 1){
		if(n[i]){
			n[i].onclick = () => {
				let n = typeof add !== "undefined"? add.style.display = "none": false;
				searchBox.style.display = "none";
			}
		}
	}
}
closeModel();
get('#dropdown-toggle').onclick = () =>{
	let n = dropdown.style.display == "block"? dropdown.style.display = "none" : dropdown.style.display = "block"; notify.style.display = "none";
	// dropdown.style.display = "block";
}
get('#noti').onclick = () => {
	let x = notify.style.display == "block"? notify.style.display = "none" : notify.style.display = "block"; dropdown.style.display = "none";
}
// if(get('#search') !== null){
// 	get('#search').onclick = () => {
// 		let destination = get('#search-box').value;
// 		if(destination !== ""){
// 			get('#ride-offer').style.display = "none";
// 			search.style.display = "block";
// 			topic.innerHTML = "Search Result";
// 		}
// 	}
// }
window.onclick = e => {
	if (e.target == dropdown){
		dropdown.style.display = "none";
	}else if(e.target == notify){
		notify.style.display = "none";
	}
}
window.onload = () => {
	get('.bar').style.boxShadow = "";
}