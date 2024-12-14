import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYpI8kcMcVgycLz9kcBAPZffwiLywNSPY",
  authDomain: "gymflow-caa4b.firebaseapp.com",
  projectId: "gymflow-caa4b",
  storageBucket: "gymflow-caa4b.appspot.com",
  messagingSenderId: "103620875668",
  appId: "1:103620875668:web:3326d9f9f41cc8939c2b81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login_to_shop_link = document.getElementById('login_to_shop_link');
const login_to_shop = document.getElementById('login_to_shop');

onAuthStateChanged(auth, (user) => {
    if (user) {
        login_to_shop_link.href = "shop.html";
        login_to_shop.textContent = "Shop";
    } else {
        login_to_shop_link.href = "Login/login.html";
        login_to_shop.textContent = "Login";
    }
});