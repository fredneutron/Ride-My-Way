let rideOfferAc = document.getElementById('ride-offer-accept');
let rideOfferPd = document.getElementById('ride-offer-pending');
let rideAv = document.getElementById('ride-offer');
let topic = document.getElementById('topic');
let x;
document.getElementById('accept').onclick = () =>{
	rideOfferAc.style.display = "block";
	rideOfferPd.style.display = "none";
	rideAv.style.display = "none";
	topic.innerHTML = "Accepted Ride Offer";

}
document.getElementById('pending').onclick = () =>{
	rideOfferPd.style.display = "block";
	rideAv.style.display = "none";
	rideOfferAc.style.display ="none";
	topic.innerHTML = "Pending Ride Offer";
}
