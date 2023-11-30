    var fullName = document.getElementById('fullName');
    var userName = document.getElementById('username');
    var number = document.getElementById('Number');
    var email = document.getElementById('Email');
    var password = document.getElementById('Password');
    var confirmPassword = document.getElementById('ConfirmPassword');
    var text1 = document.getElementById('text1');


    let userDataMain = [];
    userDataMain = JSON.parse(localStorage.getItem("users")) || [];

function registerNow(){
    event.preventDefault();   
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
    
    const checkUser = userDataMain.find((user) => {
      return user.email === email.value || user.userName === userName.value;      
    });

    if(checkUser) {
      return Swal.fire({
        icon: "error",
        title: "account...",
        text: "Account Already Exist!",            
      });

    }

          
    const user = {
        fullName : fullName.value,
        userName : userName.value,
        number : number.value,
        email : email.value,
        password : password.value,
        confirmPassword : confirmPassword.value
    };

    userDataMain.push(user);

    localStorage.setItem("users", JSON.stringify(userDataMain));

    

    setTimeout(() =>{
      window.location.replace('./dashboard.html');
      // window.location.href = './dashboard.html'
      
    },3000);

    
      

    
}

}


function getData(){
  var getUserData = document.querySelector('#getData');
  userDataMain = JSON.parse(localStorage.getItem("users"));
  getUserData.innerHTML = `
  <ul>
    <li>fullName: ${userDataMain[0].fullName} </li>
    <li>Email: ${userDataMain[0].email}</li>
    <li>userName: ${userDataMain[0].userName}</li>
    <li>number: ${userDataMain[0].number} </li>
  </ul>
  `
  
}


function redirectionsignup(){
  window.location.href = './signin.html'
}


function logOut() {
  
  setTimeout(redirectionsignup, 1000);    
}