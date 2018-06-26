let rideOfferAc = document.getElementById('ride-offer-accept');
let rideAv = document.getElementById('ride-o');
let search1 = document.getElementById('search-bar');
let add = document.getElementById('add');

document.getElementById('accept').onclick = () =>{
	rideOfferAc.style.display = "block";
	search1.style.display = "none";
	rideOfferPd.style.display = "none";
	rideAv.style.display = "none";
	topic.innerHTML = "Total Ride Taken";

}
document.getElementById('search').onclick = () =>{
	search1.style.display = "block";
	rideAv.style.display = "none";
	rideOfferAc.style.display ="none";
	topic.innerHTML = "Search Result";
}
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