import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJzL6sk0pDZtC-jtbpLNNR1dlQ94D9ccA",
  authDomain: "mea2024-d8f25.firebaseapp.com",
  databaseURL: "https://mea2024-d8f25-default-rtdb.firebaseio.com",
  projectId: "mea2024-d8f25",
  storageBucket: "mea2024-d8f25.firebasestorage.app",
  messagingSenderId: "770842232248",
  appId: "1:770842232248:web:f3da86205a5b3e6afbfb4d",
  measurementId: "G-2GMQCP11CF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };