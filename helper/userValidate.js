const userValidate = (obj, mail, pass) => {
	if(typeof obj !== "undefined" & typeof mail !== "undefined" & typeof pass !== "undefined"){
			for (let i = 1; i <= Object.keys(obj).length; i++) {
				if(obj['user'+ i].email == mail & obj['user'+ i].password == pass){
					return 'user'+i;
					break;
				}
			}
	}
}

export default userValidate;