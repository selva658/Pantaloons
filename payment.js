document.querySelector(".gotp").addEventListener("click", check)

function check() {
    var card = document.querySelector(".card").value;
    var cvv = document.querySelector(".cvv").value;
    var expiery = document.querySelector(".expiery").value;
    var phone=document.querySelector(".phone").value

    if (card.length == 16)
    {  
    }
    else
    {
        alert("wrong card number")
    }
    if (cvv.length == 3)
    { 
    }
    else
    {
        alert("wrong CVV")
    }
    if (expiery.length == 6)
    {    
    }
    else
    {
        alert("wrong expiery month details")
    }
    if (phone.length == 10)
    {  
    }
    else
    {
    alert("wrong phone number")
        }
    if (card.length == 16 && cvv.length == 3 && expiery.length == 6 && phone.length==10)
    {
        window.location.href="paymentotp.html"
    }
}




document.querySelector(".cod").addEventListener("click", function () {
    alert("order placed successfully")
    window.location.href="delivery.html"
})