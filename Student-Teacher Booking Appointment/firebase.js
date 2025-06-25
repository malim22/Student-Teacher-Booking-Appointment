// firebase.js (Simple version for plain HTML projects)

// Add these in your HTML before this file:
// <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>

const firebaseConfig = {
  apiKey: "AIzaSyCeDQSi8D5BdVb3n6A0ekqfktR9s_MNAjA",
  authDomain: "student-teacher-appointm-ed20c.firebaseapp.com",
  projectId: "student-teacher-appointm-ed20c",
  storageBucket: "student-teacher-appointm-ed20c.firebasestorage.app",
  messagingSenderId: "548040302813",
  appId: "1:548040302813:web:803aafe24d358c08eebb34",
  measurementId: "G-WPM305TEV2"
};

firebase.initializeApp(firebaseConfig);

// Make auth and db global
const auth = firebase.auth();
const db = firebase.firestore();
