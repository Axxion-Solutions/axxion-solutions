// firebase.js

// Import Firebase (modular web SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase config (from earlier setup)
const firebaseConfig = {
  apiKey: "AIzaSyDt6SlOTh1Ql2RN5evXrzw8bxe-l2Chkt4",
  authDomain: "axxion-portal.firebaseapp.com",
  projectId: "axxion-portal",
  storageBucket: "axxion-portal.appspot.com",
  messagingSenderId: "66596559953",
  appId: "1:66596559953:web:b8259b349cb11eb9016c70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Expose function globally so index.html can access it
window.checkEmailDomain = async function(email) {
  const submittedDomain = email.split('@')[1].toLowerCase();
  const snapshot = await getDocs(collection(db, "approved_domains"));
  const allowed = snapshot.docs.some(doc => doc.id.toLowerCase() === submittedDomain);

  return allowed;
};
