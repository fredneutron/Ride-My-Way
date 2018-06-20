window.onload = () =>{
	let key = window.localStorage.getItem("key");
	fetch('/api/v1/getuserdetails', {
		method: 'POST',
		credentials: 'same-origin',
		cache: 'no-cache',
		mode: 'cors',
		redirect: 'follow',
		referrer: 'no-referrer',
		headers: {
			'user-agent': 'Mozilla/4.0 MDN Example',
			'content-type': 'application/json'
		},
		body:JSON.stringify({
			"id": key
		})
	})
	.then(res => {
		window.localStorage.setItem("name",res.body.name);
		window.localStorage.setItem("picture",res.body.picture);
		window.localStorage.setItem("usertype",res.body.userType);
	});
	get('#user').innerHTML = window.localStorage.getItem("name");
	get('#userpic').src = window.localStorage.getItem("picture");
	if(window.localStorage.getItem("usertype") == "driver"){
		get('#myprofile').href = "dashboard.html";
	}else{
		get('#myprofile').href = "passenger-dashboard.html";
	}

}
let getUrlParameter = (name) => {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}