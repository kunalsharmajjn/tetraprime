// Import Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
getFirestore,
doc,
setDoc
}
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";


// Replace with YOUR configuration

const firebaseConfig = {
  apiKey: "AIzaSyB94fK6kzE-3bgFOOGzTXT-wKG1hwCvzMM",
  authDomain: "eduvault-77a27.firebaseapp.com",
  projectId: "eduvault-77a27",
  storageBucket: "eduvault-77a27.firebasestorage.app",
  messagingSenderId: "476509135405",
  appId: "1:476509135405:web:fcfedb55790053b91d0ea4",
  measurementId: "G-4N8YTCWR78"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


// Register

const form = document.querySelector("form");

form.addEventListener("submit", registerUser);

async function registerUser(e){

e.preventDefault();

const firstName =
document.querySelectorAll("input")[0].value;

const lastName =
document.querySelectorAll("input")[1].value;

const email =
document.querySelectorAll("input")[2].value;

const username =
document.querySelectorAll("input")[3].value;

const password =
document.querySelectorAll("input")[4].value;

const college =
document.querySelectorAll("input")[6].value;

const branch =
document.querySelectorAll("select")[0].value;

const year =
document.querySelectorAll("select")[1].value;

try{

const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);

const user = userCredential.user;

await setDoc(doc(db,"students",user.uid),{

firstName:firstName,

lastName:lastName,

email:email,

username:username,

college:college,

branch:branch,

year:year

});

alert("Registration Successful!");

window.location.href="login.html";

}

catch(error){

alert(error.message);

}

}