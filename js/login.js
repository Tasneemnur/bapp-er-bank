document.getElementById('btn-submit').addEventListener('click', function(e){
    e.preventDefault();
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    if(email === 'tasneemnurtashnia@gmail.com' && password === 'tashnia'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Wrong password!!! Please give the right password');
    }
    emailField.value = '';
        passwordField.value = '';
});

