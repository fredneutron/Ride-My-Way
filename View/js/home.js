import get from './get';
let signin = get('#on');
let signup = get('#off'); 
let caution = get('#switch');
let search = get('#search-bar');
let drive = get('#drive-info');
let x;
get('#usertype').onclick =() =>{
	caution.style.display = "none";
	drive.style.display = "block";
}
get('#signin1').onclick = () =>{
	signup.style.display = "none";
	signin.style.display = "block";
}
get('#signup1').onclick = () =>{
	signin.style.display = "none";
	signup.style.display = "block";
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
get('.close')[1].onclick = () =>{
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
let redirect = (url) => {
	window.location = url;
}
let formHandle = () => {
	let name = get('#first').value+" "+get('#last').value;
	let email = get('#email').value;
	let gender = get('#gender').value;
	let dob = get('#date').value;
	let pass = get('#pass').value;
	let usertype = get('#usertype').value;
	let pic = get('#p-image').value;
	let vrn = get('#vrn').value;

	fetch('/api/users', {
		method: 'POST',
		headers: new Headers(),
		body:JSON.stringify({
			"name": name,
			"email": email,
			"gender": gender,
			"dob": dob,
			"picture": "",
			"password": pass,
			"userType": usertype
		})
	}).then(data => data.json())
	.then(data => console.log(data))
	.catch(er => console.log(err));
}