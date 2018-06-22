document.addEventListener("DOMContentLoaded", () =>{
	let key = window.localStorage.getItem("key");
	fetch('/api/v1/getusers/'+key)
	.then(res => res.json())
	.then(data => {
		window.localStorage.setItem("name",data.name);
		window.localStorage.setItem("picture",data.picture);
		window.localStorage.setItem("usertype",data.userType);
	})
	.catch(err => console.log(err));
	get('#user').innerHTML = window.localStorage.getItem("name");
	get('#userpic').src = window.localStorage.getItem("picture");
	if(window.localStorage.getItem("usertype") == "driver"){
		get('#myprofile').href = "dashboard.html";
		// fetch('/api/v1/getusers/'+key)
		// .then(res => res.json())
		// .then(data => {

		// })
		// .catch(err => console.log(err));

	}else{
		get('#myprofile').href = "passenger-dashboard.html";
	}

});
let pass = () => {
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