import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDrMdKFJDEpTwnjT9voJ_Pdp3hR6_mCOns",
    authDomain: "realtime-database-1f94c.firebaseapp.com",
    databaseURL: "https://realtime-database-1f94c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "realtime-database-1f94c",
    storageBucket: "realtime-database-1f94c.firebasestorage.app",
    messagingSenderId: "567513822066",
    appId: "1:567513822066:web:6cbdd8ecd53f474914a3eb"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Vérifie si l'utilisateur est connecté
  onAuthStateChanged(auth, (user) => {
    if (user) {
      document.getElementById("user-name").textContent = user.email;
    } else {
      // Si pas connecté, retourne à la page de connexion
      window.location.href = "Auth_page.html";
    }
  });

  // Déconnexion
  document.getElementById("logout-btn").addEventListener("click", () => {
    signOut(auth).then(() => {
      window.location.href = "Auth_page.html";
    });
  });

