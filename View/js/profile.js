document.addEventListener("DOMContentLoaded", () =>{
	let key = localStorage.getItem("key");
	fetch('/api/v1/getusers/'+key)
	.then(res => res.json())
	.then(data => {
		localStorage.setItem("name",data.name);
		localStorage.setItem("picture",data.picture);
		localStorage.setItem("email",data.email);
		localStorage.setItem("gender",data.gender);
		localStorage.setItem("dob",data.dob);
		localStorage.setItem("password",data.password);
		localStorage.setItem("usertype",data.userType);
	})
	.catch(err => console.log(err));
	let pp =localStorage.getItem("picture");
	let name = localStorage.getItem("name");
	let email = localStorage.getItem("email");
	let gender = localStorage.getItem("gender");
	let dob = localStorage.getItem("dob");
	let pass = localStorage.getItem("password");
	let usertype = localStorage.getItem("usertype");
	get('#user').innerHTML = name;
	get('#userpic').src = pp;
	get('#myprofile').href = "dashboard.html";
	get('input[name="name"]').value = name;
	get('input[name="email"]').value = email;
	//get('input[name="gender"]').options[get('input[name="gender"]').selectedIndex].value = gender;
	get('input[name="pic"]').value = pp;
	if(usertype == "driver"){
		get('.dr-e').style.display = "block";
	}else{
		get('.dr-e').style.display = "none";
	}
});
let acct = document.getElementById('acc1');
let secu = document.getElementById('sec2');
document.getElementById('acct').onclick = () =>{
	secu.style.display = "none";
	acct.style.display = "block";
	
}
document.getElementById('secu').onclick = () =>{
	acct.style.display = "none";
	secu.style.display = "block";
}
get('#accut').onclick = (e) => {
	e.preventDefault();
	let cname = get('input[name="name"]').value;
	let cmail = get('input[name="email"]').value;
	let cgen = get('input[name="gender"]').value;
	let cpic = get('input[name="pic"]').value;
	fetch('/api/v1/users/'+key, {
		method: 'PUT',
		redirect: 'error',
		headers: {
			'user-agent': 'Mozilla/4.0 MDN Example',
			'content-type': 'application/json'
		},
		body:JSON.stringify({
			"name": cname,
			"email": cmail,
			"gender": cgen,
			"dob": dob,
			"picture": cpic,
			"password": pass,
			"userType": usertype
		})
	}).then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.log(err));
}
get('#logout').onclick = (e) => {
	e.preventDefault();
	localStorage.removeItem('key');
	localStorage.removeItem('name');
	localStorage.removeItem('picture');
	localStorage.removeItem('usertype');
	window.location.href = "index.html";
}