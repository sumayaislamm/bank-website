document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('login Button Clicked!')
    const phoneNumber = document.getElementById('phone-number').value;
    // console.log(phoneNumber);
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber , pinNumber);

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log("Login Successful");
        window.location.href = '/home.html';
    }
    else{
        alert("Pin Or Number is wrong!")
    }
})