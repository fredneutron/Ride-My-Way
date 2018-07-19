let acct = get('#acc1');
let secu = get('#sec2');
get('#acct').onclick = () =>{
	secu.style.display = "none";
	acct.style.display = "block";
	get('#acct').style.background = "#5bc0de";
	get('#secu').style.background = "inherit";
}
get('#secu').onclick = () =>{
	acct.style.display = "none";
	secu.style.display = "block";
	get('#acct').style.background = "inherit";
	get('#secu').style.background = "#5bc0de";
}