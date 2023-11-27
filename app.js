    var fullName = document.getElementById('fullName');
    var number = document.getElementById('Number');
    var email = document.getElementById('Email');
    var password = document.getElementById('Password');
    var confirmPassword = document.getElementById('ConfirmPassword');

    let userDataMain = [];
    userDataMain = JSON.parse(localStorage.getItem("user"));

function registerNow(){
    event.preventDefault();
    // var fullName = document.getElementById('fullName');
    // var number = document.getElementById('Number');
    // var email = document.getElementById('Email');
    // var password = document.getElementById('Password');
    // var confirmPassword = document.getElementById('ConfirmPassword');

    if(fullName.value === '' || number.value === '' || email.value === '' || password.value === '' || confirmPassword.value === '') {
        Swal.fire({
            icon: "error",
            title: "required...",
            text: "please fill all fields carefully!",            
          });
    } else if (password.value !== confirmPassword.value) {
        Swal.fire({
            icon: "error",
            title: "password...",
            text: "Password & Confirm Password Mismatch!",            
          });
    }  else {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: `${fullName.value} Registered successfully`
          });
    
          const checkUser = userDataMain.find((user) => {}

            
    const user = {
        fullName : fullName.value,
        number : number.value,
        email : email.value,
        password : password.value,
        confirmPassword : confirmPassword.value
    }

    userDataMain.push(user)

    localStorage.setItem("users", JSON.stringify(userDataMain));

    

    console.log(getUserData);    
}
}


    