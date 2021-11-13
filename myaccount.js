document.getElementById("order").addEventListener("click",fun1)
recentfun()
pastfun()
offline()

function fun1(){
    var x=document.querySelector("#orderhis");
    if(x.style.display=="none"){
        x.style.display = "block";
        
  } else {
    x.style.display = "none";
    }
}

//recent order
document.querySelector("#recent").addEventListener("click",recentfun)

function recentfun(){
    var x=document.querySelector("#hidden")
    if(x.style.display=="none"){
        x.style.display = "block";
  } else {
    x.style.display = "none";
    }
}

//pastorder

document.querySelector("#past").addEventListener("click",pastfun)

function pastfun(){
    var x=document.querySelector("#hid")
    if(x.style.display=="none"){
        x.style.display = "block";
  } else {
    x.style.display = "none";
    }

}

//offline order
document.querySelector("#offline").addEventListener("click",offline)

function offline(){
    var x=document.querySelector("#hidd")
    if(x.style.display=="none"){
        x.style.display = "block";
  } else {
    x.style.display = "none";
    }
}



//
document.querySelector("#login").addEventListener("click", login)
function login() {
    window.location.href="login.html"
}

function profile() {
    var ans = document.querySelector("#navprofile").value;
    console.log(ans);
    if (ans == "account")
    {
        window.location.href="myaccount.html"
    }
  
}