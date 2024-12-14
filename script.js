import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Wait for DOM to load
const profile_but = document.getElementById('profile');
const cart_but = document.getElementById('cart');
const demo_but = document.getElementById('demo');
const profileDropdown = document.getElementById('profileDropdown');
const logoutButton = document.getElementById('logout');

// Add event listener to the logout button
logoutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        // After sign-out, you may want to redirect the user to a different page or perform any other action.
        window.location.href = '../home.html';
        console.log("User signed out successfully");
    }).catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
    });
});

profile_but.addEventListener('click', () => {
    profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
});

logoutButton.addEventListener('click', () => {
    profileDropdown.style.display = 'none';
});

cart_but.style.display = 'none';
profile_but.style.display = 'none';

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        console.log("Logged Successfully");
        // Create the "Flow" link dynamically
        const flowLink = document.createElement("a");
        flowLink.className = "a_links";
        flowLink.href = "flow.html";
        flowLink.textContent = "Flow";
        const wrapper = document.querySelector(".wrapper");
        wrapper.appendChild(flowLink); // Add the "Flow" link to the wrapper div

        cart_but.style.display = 'block';
        profile_but.style.display = 'block';
        demo_but.style.display = 'none';
    } else {
        // No user is signed in
        cart_but.style.display = 'none';
        profile_but.style.display = 'none';
        demo_but.style.display = 'block';

        // Remove the "Flow" link if it exists
        const flowLink = document.querySelector(".wrapper .a_links[href='flow.html']");
        if (flowLink) {
            flowLink.remove();
        }
    }
});