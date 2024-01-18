const signInbtn = document.querySelector('.signin-btn');
const signUpbtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');

signUpbtn.addEventListener('click', function() {
    formBox.classList.add('active');
});

signInbtn.addEventListener('click', function() {
    formBox.classList.remove('active');
});