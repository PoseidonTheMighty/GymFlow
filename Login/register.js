import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYpI8kcMcVgycLz9kcBAPZffwiLywNSPY",
  authDomain: "gymflow-caa4b.firebaseapp.com",
  projectId: "gymflow-caa4b",
  storageBucket: "gymflow-caa4b.appspot.com",  // Corrected URL
  messagingSenderId: "103620875668",
  appId: "1:103620875668:web:3326d9f9f41cc8939c2b81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle signup submission
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "../home.html";  // Redirect to home page on successful signup
    })
    .catch((error) => {
      alert(error.message);  // Display error message to user
    });
});
