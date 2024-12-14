import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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

// Handle form submission
const resetPasswordForm = document.querySelector('form'); // Selecting your form
const emailInput = document.querySelector('input[type="email"]'); // Selecting the email input
const wrapperBox = document.querySelector('.wrapper-box'); // Wrapper for feedback messages

resetPasswordForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from reloading the page
  const email = emailInput.value.trim();

  if (!email) {
    displayMessage("Please enter a valid email.", "error");
    return;
  }

  // Send password reset email
  sendPasswordResetEmail(auth, email)
    .then(() => {
      displayMessage("Password reset email sent! Check your inbox.", "success");
    })
    .catch((error) => {
      console.error(error);
      displayMessage(`Error: ${error.message}`, "error");
    });
});

// Function to display success or error messages
function displayMessage(message, type) {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  messageElement.className = type; // Add class to style the message based on type
  wrapperBox.appendChild(messageElement);

  // Remove message after 5 seconds
  setTimeout(() => {
    wrapperBox.removeChild(messageElement);
  }, 5000);
}
