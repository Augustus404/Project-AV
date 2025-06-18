// firebase-login.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDmUWyxzFNwPzSdchRkhBeRvt6WxGCBCRc",
  authDomain: "avnowledge.firebaseapp.com",
  projectId: "avnowledge",
  storageBucket: "avnowledge.appspot.com",
  messagingSenderId: "178437092267",
  appId: "1:178437092267:web:25cd859c76629080e498ee",
  measurementId: "G-CHDCB73WNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Logic
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("loginMessage");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      message.textContent = "Login successful! Redirecting...";
      message.style.color = "lightgreen";
      // Redirect after login
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    })
    .catch((error) => {
      message.textContent = "Invalid email or password.";
      message.style.color = "#ffaaaa";
    });
});
