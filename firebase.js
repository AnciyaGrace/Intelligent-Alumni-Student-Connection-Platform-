<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAxMgNs7vzNSnCKizK_tp2OzyxLupey470",
    authDomain: "alumni-student-connection.firebaseapp.com",
    projectId: "alumni-student-connection",
    storageBucket: "alumni-student-connection.firebasestorage.app",
    messagingSenderId: "473150772662",
    appId: "1:473150772662:web:af20710ef1532e76849d17",
    measurementId: "G-9RWLTS6M97"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
