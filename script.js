
const name = document.getElementById('name');
const nickname = document.getElementById('nickname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const re_pass = document.getElementById('re_pass');
const form = document.getElementById('form');
const error = document.getElementById('error');


form.addEventListener('submit' ,(e)=>{

	let mess = [];

	if(name.value === '' || name.value == null){
		mess.push('Name is reguired');
	}
	if(nickname.value === '' || nickname.value == null){
		mess.push('NickName is reguired');
	}
	if(email.value === '' || email.value == null){
		mess.push('Email is reguired');
	}
	if(password.value === '' || password.value == null){
		mess.push('Password is reguired');
	}
	if(password.value !== re_pass.value){
		mess.push('Password do not match');
	}
	if(password.value.length >= 20){
		mess.push('Password must be less than 20 characters');
	}


	


	if(mess.length > 0 ){
		e.preventDefault();
		error.innerText = mess.join(',  ');
	}
});



