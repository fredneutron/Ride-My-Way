let signin = get('#on');
let signup = get('#off'); 
let caution = get('#switch');
let search = get('#search-bar');
let drive = get('#drive-info');
let x;
let pau;
let id;
get('#userdr').onclick =() =>{
	caution.style.display = "none";
	drive.style.display = "block";
	get('input[name="usertype"]').value = "driver";
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
get('.close').onclick = () =>{
    signin.style.display = "none";
}
get('.close').onclick = () =>{
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
	pau = pass;
	x = (n >= 75)? true : false;
}
get('#continue').onclick = () =>{
	if(x & pau == get('#confirm').value){
		signup.style.display = "none";
		caution.style.display = "block";
	}else{
		get('#error1').innerHTML = "<span class='danger'>Please enter the correct password to confirm<span>";
	}
}
window.onclick = e => {
	if (e.target == signin) {
		signin.style.display = "none";
	}else if(e.target == signup){
		signup.style.display = "none";
	}else if(e.target == caution){
		caution.style.display = "none";
	}else if(e.target == drive){
		drive.style.display = "none";
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
			get('#error').innerHTML = "<span class='danger'>password is poor!</span>";
			get('#pass').value = "";
		}else if (n == 50) {
			get('#error').innerHTML = "<span class='caution'>password is fair!</span>";
			get('#pass').value = "";
		}else if (n == 75) {
			get('#error').innerHTML = "<span class='good'>password is good!</span>";
		}else if (n == 100) {
			get('#error').innerHTML = "<span class='success'>password is strong!</span>"
		}
		return n;
	}else if(word.length < 6){
		get('#error').innerHTML = "<span class='danger'>Minimum password length is 6</span>";
	}else{
		get('#error').innerHTML = "<span class='danger'>Maximum password length is 12</span>";
	}
}
let redirect = (url) => {
	window.location = url;
}
let formHandle = () => {
	let name = get('#first').value+" "+get('#last').value;
	let email = get('#email').value;
	let gender = get('input[name="gender"]:checked').value;
	let dob = get('#date').value;
	let pass = get('#pass').value;
	let usertype = get('input[name="usertype"]').value;
	let pic = get('#p-image').value;
	let vrn = get('#vrn').value;
	
	fetch('/api/v1/users', {
		method: 'POST',
		redirect: 'error',
		headers: {
			'user-agent': 'Mozilla/4.0 MDN Example',
			'content-type': 'application/json'
		},
		body:JSON.stringify({
			"name": name,
			"email": email,
			"gender": gender,
			"dob": dob,
			"picture": "/images/Koala.jpg",
			"password": pass,
			"userType": usertype
		})
	})
	.then(res => res.json())
	.then(data => {
		id = data.key;
		fetch('/api/v1/drivers', {
			method: 'POST',
			redirect: 'error',
			headers: {
				'user-agent': 'Mozilla/4.0 MDN Example',
				'content-type': 'application/json'
			},
			body:JSON.stringify({
				"id": id,
				"driver-license": pic,
				"VRN": vrn
			})
		}).then(re => re.json())
		.then(res => console.log(res))
		.catch(err => console.log(err));
		window.localStorage.setItem("key", id);
		window.location.href = "dashboard.html";
	}).catch(err => console.log(err));
}
let formPass = () => {
	get('input[name="usertype"]').value = "passenger";
	let name = get('#first').value+" "+get('#last').value;
	let email = get('#email').value;
	let gender = get('input[name="gender"]:checked').value;
	let dob = get('#date').value;
	let pass = get('#pass').value;
	let usertype = get('input[name="usertype"]').value;
	let pic = get('#p-image').value;
	let vrn = get('#vrn').value;

	fetch('/api/v1/users', {
		method: 'POST',
		redirect: 'error',
		headers: {
				'user-agent': 'Mozilla/4.0 MDN Example',
				'content-type': 'application/json'
		},
		body:JSON.stringify({
			"name": name,
			"email": email,
			"gender": gender,
			"dob": dob,
			"picture": "/images/Koala.jpg",
			"password": pass,
			"userType": usertype
		})
	}).then(data => data.json())
	.then(data => {
		id = data.key;
	})
	.catch(err => console.log(err));
	window.localStorage.setItem("key", id);
	window.location.href = "dashboard.html";
}
let login = (e) => {
	e.preventDefault();
	let email = get('input[name="logemail"]').value;
	let passw = get('input[name="logpass"]').value;
	fetch('/api/v1/authusers', {
		method: 'POST',
		redirect: 'error',
		headers: {
				'user-agent': 'Mozilla/4.0 MDN Example',
				'content-type': 'application/json'
		},
		body:JSON.stringify({
			"user": email,
			"pass": pass,
		})
	}).then(res => res.json())
	.then(data => {
		id = data.key;
		alert(id);
	});
	if(typeof id !== "undefined" & typeof id !== null){
		window.localStorage.setItem("key", id);
		window.location.href = "dashboard.html";
	}else{
		get('#logerr').innerHTML = "<span class='danger'> Username/Password incorrect !</span>";
	}
}