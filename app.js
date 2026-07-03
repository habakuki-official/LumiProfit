import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


// ==========================
// CREATE ACCOUNT
// ==========================

const registerBtn = document.getElementById("registerBtn");

if(registerBtn){

registerBtn.addEventListener("click", async ()=>{

const fullName=document.getElementById("fullName").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

if(fullName==="" || email==="" || password===""){
alert("Please fill all fields.");
return;
}

try{

const userCredential=
await createUserWithEmailAndPassword(auth,email,password);

const user=userCredential.user;

await setDoc(doc(db,"users",user.uid),{

fullName:fullName,
email:email,
status:"Pending",
balance:0

});

alert("Account created successfully!");

window.location.href="login.html";

}catch(error){

alert(error.message);

}

});

}



// ==========================
// LOGIN
// ==========================

const loginBtn=document.getElementById("loginBtn");

if(loginBtn){

loginBtn.addEventListener("click",async()=>{

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(auth,email,password);

window.location.href="verify.html";

}catch(error){

alert(error.message);

}

});

}
// ==========================
// SHOW USERS IN ADMIN
// ==========================

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const usersList = document.getElementById("usersList");

if (usersList) {

    async function loadUsers() {

        usersList.innerHTML = "";

        const snapshot = await getDocs(collection(db, "users"));

        snapshot.forEach((doc) => {

            const user = doc.data();

            usersList.innerHTML += `
                <div style="
                border:1px solid #ccc;
                padding:10px;
                margin:10px;
                border-radius:10px;
                ">
                    <h3>${user.fullName}</h3>

                    <p>Email: ${user.email}</p>

                    <p>Phone: ${user.country} ${user.phone}</p>

                    <p>Status: ${user.status}</p>

                    <button>Approve</button>

                </div>
            `;

        });

    }

    loadUsers();

}
