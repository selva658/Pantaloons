document.querySelector(".btnnext").addEventListener("click",login)
    var usermailarr=JSON.parse(localStorage.getItem("usermaildetails")) || []
  
    function login(){
        var mail=document.querySelector(".logintextbox").value;
        var usermailobj={
            usermail:mail,
        }

          usermailarr.push(usermailobj)
          localStorage.setItem("usermaildetails",JSON.stringify(usermailarr));

          for(var i=0;i<usermailarr.length;i++)
          {
              if(usermailarr[i].usermail==mail)
              {
                  alert("Welcome back")
                  window.location.href="frontpage.html"
                  break;
                 
              }
              else{
                  alert("new user")
                  window.location.href="login2part.html"
                  break;
              }
          }
        
    }