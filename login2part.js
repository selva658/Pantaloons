document.querySelector(".btnagree").addEventListener("click",login2part)
var usermobilearr=JSON.parse(localStorage.getItem("usermobiledetails")) || []
function login2part(){
    var name=document.querySelector("#name").value;
    var mobile=document.querySelector("#mobile").value;
    
    var usermobileobj={
        username:name,
        usermobile:mobile,
    }
   
usermobilearr.push(usermobileobj)
localStorage.setItem("usermobiledetails",JSON.stringify(usermobilearr))
console.log(usermobilearr);   
window.location.href="otp.html"
}