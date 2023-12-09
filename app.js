    var fullName = document.getElementById('fullName');
    var userName = document.getElementById('username');
    var number = document.getElementById('Number');
    var email = document.getElementById('Email');
    var password = document.getElementById('Password');
    var confirmPassword = document.getElementById('ConfirmPassword');
    var text1 = document.getElementById('text1');

    
    let userDataMain = [];
    userDataMain = JSON.parse(localStorage.getItem("users")) || [];

    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || [];

    // function loginOn() {
    //   loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    //   if(loggedInUser) window.location.href = './signin.html'
    
    // }

    // document.addEventListener('DOMContentLoaded', function() {
    //   loginOn();
    // });

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

    loggedInUser = user;
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    

    setTimeout(() =>{
      window.location.replace('./signin.html');
      // window.location.href = './dashboard.html'
      
    },1000);

    
      

    
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
  window.location.href = './signin.html';
}

function redirectiontomainpage() {
  window.location.href = './index.html';
}




function logOut() {  
  setTimeout(redirectionsignup, 1000);    
}




function login(){
  event.preventDefault();
  const email = document.getElementById('Email').value;
  const password = document.getElementById('Password').value;
  userDataMain = JSON.parse(localStorage.getItem("users")) || [];
 

  if(userDataMain.length === 0){
    Swal.fire({
      icon: "error",
      title: "No users found",
      text: "Please sign up before logging in!",
    });
    return;
  }

  let user = userDataMain.find((user) => user.email === email);

  if(!user){
    Swal.fire({
      icon: "error",
      title: "User not found",
      text: "Email or Password is invalid!",
    });
    return;
  } 
  
  if(user.password !== password){
    Swal.fire({
      icon: "error",
      title: "Password mismatch",
      text: "Email or Password is invalid!",
    });
    return;
  }

  loggedInUser = user;
  localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

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
    title: `${email} login successfully`
  });

setTimeout(() =>{
  window.location.replace('./dashboard.html'); 
  },4000);

}

function password_show_hide() {
  var x = document.getElementById("Password");
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


function password_show_hide1() {
  var xx = document.getElementById("ConfirmPassword");
  var show_eye = document.getElementById("show_eyee");
  var hide_eye = document.getElementById("hide_eyee");
  hide_eye.classList.remove("d-none");
  if (xx.type === "Password") {
    xx.type = "text";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
  } else {
    xx.type = "password";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
  }
}

// function loginOn {
//   loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
//   if(loggedInUser) window.location.href = './signin.html'

// }







function addPost(){
  const postContent = document.getElementById('postContent');
  const cardContainer = document.getElementById('cardContainer');
  const postTime = new Date().toLocaleString();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;


  if (!loggedInUser) {
    window.location.replace('./signin.html');
    return;
  }

  if (!postContent.value.trim()) {
    Swal.fire({
      icon: 'error',
      title: 'Post content required',
      text: 'Please enter some content for your post!',
    });
    return;
  }

  const newPost = {
    user: loggedInUser.fullName,
    time: postTime,
    content: postContent.value,
  };

  
  const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];

  
  storedPosts.push(newPost);

  
  localStorage.setItem('posts', JSON.stringify(storedPosts));

  
  const postElement = document.createElement('div');
  postElement.className = 'card-header';
  postElement.innerHTML = `
    <img id="ProfileImage" src="./images/profile.png" alt="" width="30px">
    <span id="UserName">${newPost.user}</span>
    <p class="card-text"><small class="text-body-secondary">${newPost.time}</small></p>               
    <button class="bi bi-pencil-square btn btn-outline-primary ms-5" onclick="edit()"> Edit</button>
  </div>
  <div class="card mb-3">
    <img src="" class="card-img-top" alt="" id="cardimage">
    <div class="card-body">
      <h5 class="card-title" id="cardtitle"></h5>
      <p class="card-text" id="cardtext">${newPost.content}</p>
    </div>
  </div>`;

  cardContainer.insertBefore(postElement, cardContainer.firstChild);

  
  postContent.value = '';



// const newPost = document.createElement('div');
// newPost.className = 'card-header';
// newPost.innerHTML = `
  
//   <img id="ProfileImage" src="./images/profile.png" alt="" width="30px">
//   <span id="UserName">${loggedInUser.fullName}</span>
//   <p class="card-text"><small class="text-body-secondary">${postTime}</small></p>               
// </div>
// <div class="card mb-3">
// <img src="" class="card-img-top" alt="" id="cardimage">
// <div class="card-body">
//   <h5 class="card-title" id="cardtitle"></h5>
//   <p class="card-text" id="cardtext">${postContent.value}</p>
// </div>
// </div>`

// cardContainer.appendChild(newPost);

// postContent.value = '';

// postContent.value = '';

  
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push({
    user: loggedInUser.fullName,
    time: postTime,
    content: postContent.value,
  });
  localStorage.setItem('posts', JSON.stringify(posts));


localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));


}


window.onload = function () {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) ;

  if (loggedInUser) {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const cardContainer = document.getElementById('cardContainer');

    storedPosts.forEach((post) => {
      const newPost = document.createElement('div');
      newPost.className = 'card-header';
      newPost.innerHTML = `
        <img id="ProfileImage" src="./images/profile.png" alt="" width="30px">
        <span id="UserName">${post.user}</span>
        <p class="card-text"><small class="text-body-secondary">${post.time}</small></p>               
      </div>
      <div class="card mb-3">
        <img src="" class="card-img-top" alt="" id="cardimage">
        <div class="card-body">
          <h5 class="card-title" id="cardtitle"></h5>
          <p class="card-text" id="cardtext">${post.content}</p>
        </div>
      </div>`;

      cardContainer.appendChild(newPost);
    });
  }
};
