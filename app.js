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
  window.location.replace('./signin.html');
}

function redirectiontomainpage(){
  window.location.replace('./index.html');
  
}




function logOut() {  
  setTimeout(redirectionsignup, 1000);    
}

function login(){
  event.preventDefault();
  const email = document.getElementById('Email');
  const password = document.getElementById('Password');
  userDataMain = JSON.parse(localStorage.getItem("users")) 

  console.log(email);
  console.log(password);
  console.log(userDataMain);

  if(!userDataMain){
    console.log(!userDataMain);
    return window.location.href = './signin.html'
  } else if (userDataMain.email !== email.value && userDataMain.password !== password.value){
  Swal.fire({
    icon: "error",
    title: "email & password...",
    text: "email or Password Invalid or Mismatch!",            
  });
} 
else {
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
    title: `${email.value} login successfully`
  });

setTimeout(() =>{
  window.location.replace('./dashboard.html'); 
  },4000);
}  
}



function password_show_hide() {
  var x = document.getElementById("password");
  var show_eye = document.getElementById("show_eye");
  var hide_eye = document.getElementById("hide_eye");
  hide_eye.classList.remove("d-none");
  if (x.type === "password") {
    x.type = "text";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
  } else {
    x.type = "password";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
  }
}