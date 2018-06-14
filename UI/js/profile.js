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