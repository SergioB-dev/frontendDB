import { initializeApp} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";



const firebaseApp = {
  apiKey: "AIzaSyAg_Z-0zKivweymS5Jh9n4wHVmbfXz-9-M",
  authDomain: "arabreader-cbda8.firebaseapp.com",
  projectId: "arabreader-cbda8",
  storageBucket: "arabreader-cbda8.appspot.com",
  messagingSenderId: "74117322714",
  appId: "1:74117322714:web:12bccd9681a67b936e92e3",
  measurementId: "G-7C9JJKT83M"
};

initializeApp(firebaseApp)

const auth = getAuth()

console.log(`The user is ${auth.currentUser}`)

export { auth, firebaseApp, initializeApp, getAuth }