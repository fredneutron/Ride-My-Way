const userValidate = (obj, mail, pass) => {
  if (typeof obj !== 'undefined' && typeof mail !== 'undefined' && typeof pass !== 'undefined') {
    for (let i = 1; i <= Object.keys(obj).length; i += 1) {
      if (obj[i].email === mail && obj[i].password === pass) {
        return obj[i];
      }
    }
  } else {
    return -1;
  }
};

export default userValidate;
