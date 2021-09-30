
var firstName = document.querySelector('#firstName');
var msg1 = document.querySelector('.msg1');
var lastName = document.querySelector('#lastName');
var msg2 = document.querySelector('.msg2');
var email = document.querySelector('#email');
var msg3 = document.querySelector('.msg3');
var password = document.querySelector('#password');
var msg4 = document.querySelector('.msg4');
var button = document.querySelector('button');

button.addEventListener('click', oneClick);
// var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))va@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var reg = /\S+@\S+\.\S+/;

function oneClick(e) {
    e.preventDefault();
    if (firstName.value === '') {
        firstName.classList.remove('noPhoto');
        msg1.classList.remove('successful');
        firstName.classList.add('back');
        msg1.classList.add('error');
        msg1.innerHTML = 'First name cannot be empty';
    } else {
        firstName.classList.add('noPhoto');
        msg1.classList.add('successful');
        msg1.innerHTML = 'Well done!';
    }
    if (lastName.value === '') {
        lastName.classList.remove('noPhoto');
        msg2.classList.remove('successful');
        lastName.classList.add('back');
        msg2.classList.add('error'); 
        msg2.innerHTML = 'Last name cannot be empty';
    } else {
        lastName.classList.add('noPhoto');
        msg2.classList.add('successful');
        msg2.innerHTML = 'Well done!';
    }
    if (email.value === '' || !reg.test(email.value)) {
        email.classList.remove('noPhoto');
        msg3.classList.remove('successful');
        email.classList.add('back');
        msg3.classList.add('error');
        msg3.innerHTML = 'Looks like this is not an email';
    } else {
        email.classList.add('noPhoto');
        msg3.classList.add('successful');
        msg3.innerHTML = 'Well done!';
    }
    if (password.value === '') {
        password.classList.remove('noPhoto');
        msg4.classList.remove('successful');
        password.classList.add('back');
        msg4.classList.add('error');
        msg4.innerHTML = 'Password cannot be emtpy';
    } else {
        password.classList.add('noPhoto');
        msg4.classList.add('successful');
        msg4.innerHTML = 'Well done!';
    }
    return;
}
