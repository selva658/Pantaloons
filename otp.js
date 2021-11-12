document.querySelector(".btnnext").addEventListener("click",otpfun)

function otpfun(){
    var otp=document.querySelector(".logintextbox").value;
    if(otp==1234)
    {
        window.location.href="loginsuccesful.html"
    }
    else{
        alert("please check the OTP")
    }
}