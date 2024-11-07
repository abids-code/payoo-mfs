// document.getElementById('btn-login')
//     .addEventListener('click', function (event){
//         event.preventDefault();
//         console.log('Login Button Clicked');

//         const phoneNumber = document.getElementById('phone-number').value;
//         console.log(phoneNumber);


//     })

document.getElementById('btn-login')
    .addEventListener('click', function(event){
        event.preventDefault();

        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;

        if(phoneNumber === '01600376406' && pinNumber === '340143'){
            console.log('Welcome! You are logged in');
            window.location.href = '/home.html';
        }else{
            alert('Invalid Phone Number or Password');
        }


    })