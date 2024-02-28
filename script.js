const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorMsg = document.querySelectorAll('#errorMsg');
const icon = document.querySelectorAll('#icon');
const input = document.querySelectorAll('input');

//console.log(input);
//console.log(errorMsg);
//console.log(icon);

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    firstName.value == "" ? alertDisplayBlock(0):alertDisplayNone(0);
    lastName.value == "" ? alertDisplayBlock(1):alertDisplayNone(1);
    email.value == "" ? alertDisplayBlock(2):alertDisplayNone(2);
    password.value == "" ? alertDisplayBlock(3):alertDisplayNone(3);
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
})

function alertDisplayBlock(i){
    input[i].classList.add('error');
    errorMsg[i].classList.add('block');
    errorMsg[i].classList.remove('hide');
    icon[i].classList.add('block');
    icon[i].classList.remove('hide');
}

function alertDisplayNone(i){
    input[i].classList.remove('error');
    errorMsg[i].classList.add('hide');
    errorMsg[i].classList.remove('block');
    icon[i].classList.add('hide');
    icon[i].classList.remove('block');
}


