document.getElementById('btn-login')
    .addEventListener('click', function (event){
        event.preventDefault();
        console.log('Login Button Clicked');

        const phoneNumber = document.getElementById('phone-number').value;
        console.log(phoneNumber);
    })