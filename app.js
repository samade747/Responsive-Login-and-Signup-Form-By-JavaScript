


function registerNow(){
    event.preventDefault();
    var fullName = document.getElementById('fullName');
    var number = document.getElementById('Number');
    var email = document.getElementById('Email');
    var password = document.getElementById('Password');
    var confirmPassword = document.getElementById('ConfirmPassword');

    if(fullName.value === '' || number.value === '' || email.value === '' || password.value === '' || confirmPassword.value === '') {
        alert(`please fill all feilds carefuly`);
    } else {

        
        

    
    var userData = {
        fullName : fullName.value,
        number : number.value,
        email : email.value,
        password : password.value,
        confirmPassword : confirmPassword.value

    }
    localStorage.setItem("userData", JSON.stringify(userData));

    var getUserData = JSON.parse(localStorage.getItem("userData"));

    console.log(getUserData);    
}
}


    