let get = item =>{
	if(document.querySelector(item) !== null & typeof(document.querySelector(item)) !== "undefined"){
		return document.querySelector(item);
	}else{
		return document.querySelector('#test');
	}
}
let signin = get('#on');
let signup = get('#off'); 
let caution = get('#switch');
let search = get('#search-bar');
let dropdown = get('#dropdown');
let rideOfferAc = get('.ride-offer-accept');
let rideOfferPd = get('.ride-offer-pending');
let rideAv = get('.ride-offer');
let x;
get('#accept').onclick = () =>{
	rideOfferAc.style.display = "block";
	rideOfferPd.style.display = "none";
	rideAv.style.display = "none";
}
get('#pending').onclick = () =>{
	rideOfferPd.style.display = "block";
}
get('#dropdown-toggle').onclick = () =>{
	dropdown.style.display = "block";
}
get('#search').onclick = () => {
	let destination = get('#search-box').value;
	if(destination !== ""){
		search.style.display = "block";
	}
}

get('.close')[0].onclick = () =>{
    signin.style.display = "none";
}
get('.close')[1].onclick =() =>{
    signup.style.display = "none";
}
get('#signin').onclick =() =>{
	signin.style.display = "block";
}
get('#signup').onclick = () =>{
	signup.style.display = "block";
}
get('#pass').onchange = () =>{
	let pass = get('#pass').value;
	let n = validation(pass);
	x = (n >= 75)? true : false;
}
get('#continue').onclick = () =>{
	if(x){
		signup.style.display = "none";
		caution.style.display = "block";
	}
}
window.onclick = e => {
	if (e.target == signin) {
		signin.style.display = "none";
	}else if(e.target == signup){
		signup.style.display = "none";
	}else if(e.target == caution){
		caution.style.display = "none";
	}else if(e.target == dropdown){
		dropdown.style.display = "none";
	}
}
let validation = (word) =>{
	if(word.length >= 6 & word.length <= 12){
		let n = 0;
		n = word.match(/[A-Z]/g)? n+=25 : n+=0;
		n = word.match(/[a-z]/g)? n+=25 : n+=0;
		n = word.match(/[0-9]/g)? n+=25 : n+=0;
		n = word.match(/[$@#&!]/g)? n+=25 : n+=0;
		if (n == 25) {
			get('#error').innerHTML = "password is poor";
			get('#pass').value = "";
		}else if (n == 50) {
			get('#error').innerHTML = "password is fair!";
			get('#pass').value = "";
		}else if (n == 75) {
			get('#error').innerHTML = "password is good!";
		}else if (n == 100) {
			get('#error').innerHTML = "password is strong!"
		}
		return n;
	}else if(word.length < 6){
		get('#error').innerHTML = "Minimum password length is 6";
	}else{
		get('#error').innerHTML = "Maximum password length is 12";
	}
}
let toggle = () =>{
	let id = document.querySelector('.offer-response-b').id;
	if(id.length > 0){
		for (let i = 0; i < id.length; i++) {
			get('#'+id[i]).onclick = () =>{
				get('#offer'+id[i]).style.display = "block";
			}
			if(get('#offer'+id[i]).style.display = "block"){
				get('#offer'+(!id[i])).style.display = "none";
			}
		}
	}
}
