function goToRegister(){
    window.location.href = "register.html";
}

function goToLogin(){
    window.location.href = "login.html";
}
function adminLogin(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;

if(username==="admin" && password==="123456"){

window.location.href="admin-dashboard.html";

}else{

alert("Username cyangwa Password siyo.");

}

}
