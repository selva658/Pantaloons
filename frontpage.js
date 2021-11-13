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