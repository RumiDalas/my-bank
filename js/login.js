// step1 : add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    // step2 : get email address inside the email input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value ;
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value
    if(email=== 'rumi@bank.com' && password === '123' ){
        window.location.href  = 'bank.html'
        console.log('valid user')
    }else{
        alert('enter valid user or password')
        console.log('invalid user')
    }
})