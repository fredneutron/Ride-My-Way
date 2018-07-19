let get = name => (document.querySelector(name));
let signin = get('#on');
let signup = get('#off');
let search = get('#search-bar');
let drive = get('#drive-info');
let searchBox = get('#search-box');
let x;
get('#signin1').onclick = () =>{
	signup.style.display = "none";
	signin.style.display = "block";
}
get('#signup1').onclick = () =>{
	signin.style.display = "none";
	signup.style.display = "block";
}
get('#search').onclick = () => {
	searchBox.style.display = "block";
	get('#search-b').onclick = () => {
		let loco = get('location').value;
		let destination = get('destination').value;
		search.style.display = "block";
	}
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
		drive.style.display = "block";
	}
}
window.onclick = e => {
	if (e.target == signin) {
		signin.style.display = "none";
	}else if(e.target == signup){
		signup.style.display = "none";
	}else if(e.target == drive){
		drive.style.display = "none";
	}else if(e.target == searchBox){
		searchBox.style.display = "none";
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

let closeModel = () => {
	let n = document.getElementsByClassName('close');
	for(i = 0; i < n.length; i += 1){
		if(n[i]){
			n[i].onclick = () => {
				signin.style.display = "none";
				signup.style.display = "none";
				drive.style.display = "none";
				searchBox.style.display = "none";
			}
		}
	}
}
closeModel();
