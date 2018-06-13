let signin = document.getElementById('on');
let signup = document.getElementById('off'); 
let caution = document.getElementById('switch');
let search = document.getElementById('search-bar');
let dropdown = document.getElementById('dropdown');
let x;
document.getElementById('dropdown-toggle').onclick = () =>{
	dropdown.style.display = "block";
}
document.getElementById('search').onclick = () => {
	let destination = document.getElementById('search-box').value;
	if(destination !== ""){
		search.style.display = "block";
	}
}
document.getElementsByClassName('close')[0].onclick = () =>{
    signin.style.display = "none";
}
document.getElementsByClassName('close')[1].onclick =() =>{
    signup.style.display = "none";
}
document.getElementById('signin').onclick =() =>{
	signin.style.display = "block";
}
document.getElementById('signup').onclick = () =>{
	signup.style.display = "block";
}
document.getElementById('pass').onchange = () =>{
	let pass = document.getElementById('pass').value;
	let n = validation(pass);
	x = (n >= 75)? true : false;
}
document.getElementById('continue').onclick = () =>{
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
			document.getElementById('error').innerHTML = "password is poor";
			document.getElementById('pass').value = "";
		}else if (n == 50) {
			document.getElementById('error').innerHTML = "password is fair!";
			document.getElementById('pass').value = "";
		}else if (n == 75) {
			document.getElementById('error').innerHTML = "password is good!";
		}else if (n == 100) {
			document.getElementById('error').innerHTML = "password is strong!"
		}
		return n;
	}else if(word.length < 6){
		document.getElementById('error').innerHTML = "Minimum password length is 6";
	}else{
		document.getElementById('error').innerHTML = "Maximum password length is 12";
	}
}