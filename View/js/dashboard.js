document.addEventListener("DOMContentLoaded", () =>{
	let key = window.localStorage.getItem("key");
	fetch('/api/v1/getusers/'+key)
	.then(res => res.json())
	.then(data => {
		localStorage.setItem("name",data.name);
		localStorage.setItem("picture",data.picture);
		localStorage.setItem("usertype",data.userType);
	})
	.catch(err => console.log(err));
	let pp =localStorage.getItem("picture");
	let name = localStorage.getItem("name");
	let usertype = localStorage.getItem("usertype");
	get('#user').innerHTML = name;
	get('#pageuser').innerHTML = name;
	get('#userpic').src = pp;
	get('#pagepic').src = pp;
	if(usertype == "driver"){
		get('#ride-add').type = "button";
		get('#myprofile').href = "dashboard.html";
		get('.ride-offers').style.display = "block";
		get('.pg-ride').style.display ="none !important";
		get('.dr-gig').style.display = "block";
		get('.search-form').style.display = "none !important";
		get('.pg-gig').style.display = "none !important";
		// fetch('/api/v1/getusers/'+key)
		// .then(res => res.json())
		// .then(data => {

		// })
		// .catch(err => console.log(err));

	}else{
		get('#myprofile').href = "dashboard.html";
		get('#ride-add').type = "hidden";
		get('.ride-offers').style.display = "none !important";
		get('.pg-ride').style.display ="block";
		get('.search-form').style.display = "block";
		get('.pg-gig').style.display = "block";
		get('.dr-gig').style.display = "none !important";
	}

});
get('#create-ride').onclick = (e) => {
	e.preventDefault();
	let loc = get('input[name="Location"]').value;
	let dec = get('input[name="destination"]').value;
	let dat = get('input[name="date"]').value;
	let time = get('input[name="time"]').value;

	fetch('/api/v1/rides', {
		method: 'POST',
		headers: {
			'user-agent': 'Mozilla/4.0 MDN Example',
			'content-type': 'application/json'
		},
		body:JSON.stringify({
			"id": window.localStorage.getItem("key"),
			"location": loc,
			"destination": dec,
			"date": dat,
			"time": time
		})
	})
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.log(err));
}
let add = get('#add');
let offer = get('#offer123');
let rideOfferAc = get('#ride-offer-accept');
let rideOfferPd = get('#ride-offer-pending');
let rideAv = get('#ride-offer');
get('#ride-add').onclick = () =>{
	add.style.display = "block";
}
get('.close').onclick = () =>{
    add.style.display = "none";
}
get('#accept').onclick = () =>{
	rideOfferAc.style.display = "block";
	rideOfferPd.style.display = "none";
	rideAv.style.display = "none";
	topic.innerHTML = "Accepted Ride Offer";

}
get('#pending').onclick = () =>{
	rideOfferPd.style.display = "block";
	rideAv.style.display = "none";
	rideOfferAc.style.display ="none";
	topic.innerHTML = "Pending Ride Offer";
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
get('#logout').onclick = (e) => {
	e.preventDefault();
	localStorage.removeItem('key');
	localStorage.removeItem('name');
	localStorage.removeItem('picture');
	localStorage.removeItem('usertype');
	window.location.href = "index.html";
}