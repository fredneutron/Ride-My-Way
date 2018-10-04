let get = name => (document.querySelector(name));
let signin = get('#on');
let signup = get('#off');
let search = get('#search-bar');
let drive = get('#drive-info');
let searchBox = get('#search-box');
let x;
let pas;
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
	pas = pass;
	x = (n >= 75)? true : false;
}
get('#continue').onclick = () =>{
	if(x & pas == get('#confirm').value){
		signup.style.display = "none";
		drive.style.display = "block";
	}else{
		get('#error1').innerHTML = "<span class='danger'>Please enter the correct password to confirm<span>";
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
	if(word.length >= 8){
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
	}else if(word.length < 8){
		get('#error').innerHTML = "Minimum password length is 8";
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

get('#submit').onclick = (e) => {
	e.preventDefault();
	let name = get('input[name="first"]').value+" "+get('input[name="last"]').value;
	let email = get('input[name="email"]').value;
	let gender = get('input[name="gender"]:checked').value;
	let dob = get('input[name="date"]').value;
	let pass = pas;
	let vechicleType = get('input[name="vectype"]').value;
	let vechicleModel = get('input[name="vecmodel"]').value;
	let driverLicense = get('input[name="drlic"]').value;
	let vrn = get('input[name="vrn"]').value;
	let id;

	fetch('/api/v1/auth/signup', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body:JSON.stringify({
			"name": name,
			"email": email,
			"gender": gender,
			"dob": dob,
			"picture": "/images/Koala.jpg",
			"password": pass
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
				"user_id": id,
				"vechicle_type": vechicleType,
				"vechicle_model": vechicleModel,
				"driver_license": driverLicense,
				"VRN": vrn
			})
		}).then(re => re.json())
		.then(res => console.log(res))
		.catch(err => console.log(err));
		localStorage.setItem("key", id);
		window.location.href = "dashboard.html";
	}).catch(err => console.log(err));
}