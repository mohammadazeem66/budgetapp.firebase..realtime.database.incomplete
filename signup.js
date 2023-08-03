// Import the functions you need from the SDKs you need
import { auth, database } from "./firebase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-Database.js";
import { ref , set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-Database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
  
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  

// const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const userId = userCredential.user.uid;

    
    set(ref(database, 'users/' + userId), {
        
        email: email,
        password: password,
        
        
    });
    // location.href="./login.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



  });

