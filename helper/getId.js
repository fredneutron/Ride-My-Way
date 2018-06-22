const userValidate = (obj, email,password) => {
	if(typeof obj !== "undefined" & typeof name !== "undefined"){
			for (let i = 1; i <= Object.keys(obj).length; i++) {
				if(obj['user'+ i].email == email & obj['user'+ i].password == password){
					return 'user'+i;
					break;
				}
			}
	}
}

export default userValidate;