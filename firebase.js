// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBEEs1CmtLm1WPc-WcF64sCj1GMCG91-c",
  authDomain: "comandasjordan.firebaseapp.com",
  databaseURL: "https://comandasjordan-default-rtdb.firebaseio.com",
  projectId: "comandasjordan",
  storageBucket: "comandasjordan.firebasestorage.app",
  messagingSenderId: "331640094505",
  appId: "1:331640094505:web:c8beb8f03cfd774467c138"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, onValue, remove, update };
