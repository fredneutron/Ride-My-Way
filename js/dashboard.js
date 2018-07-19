let rideOfferAc = get('#ride-offer-accept');
let rideAv = get('#ride-o');
let add = get('#add');
get('#accept').onclick = () =>{
	rideOfferAc.style.display = "block";
	search1.style.display = "none";
	rideAv.style.display = "none";
	topic.innerHTML = "Total Ride Taken";
}
// get('#search').onclick = () =>{
// 	search1.style.display = "block";
// 	rideAv.style.display = "none";
// 	rideOfferAc.style.display ="none";
// 	topic.innerHTML = "Search Result";
// }
get('#ride-add').onclick = () =>{
	add.style.display = "block";
}
window.onclick = e => {
	if (e.target == add) {
		add.style.display = "none";
	}else if(e.target == searchBox){
		searchBox.style.display = "none";
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