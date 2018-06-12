let signin = document.getElementById('on');
let signup = document.getElementById('off'); 
document.getElementsByClassName('close')[0].onclick =() =>{
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
window.onclick = e => {
	if (e.target == signin) {
		signin.style.display = "none";
	}else if(e.target == signup){
		signup.style.display = "none";
	}
}