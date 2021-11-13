// Js for top deals part
document.getElementById("offerPrice").addEventListener("click", bedSheets);
document.getElementById("handBags").addEventListener("click", frocksPage);
document.getElementById("stylesAt").addEventListener("click", style69);
document.getElementById("lastOf").addEventListener("click", faballey);

// Js for Fashion steals part
document.getElementById("under399").addEventListener("click", under399);
document.getElementById("under699").addEventListener("click", under699);
document.getElementById("under999").addEventListener("click", under999);


// Js for what's hot part
document.getElementById("hotDeals").addEventListener("click", softSnugles);
document.getElementById("hotDeals1").addEventListener("click", easyTees);
document.getElementById("hotDeals2").addEventListener("click", sunnyDays);
document.getElementById("hotDeals3").addEventListener("click", ethnicVibes);


// Js for Top Categories


document.getElementById("Rkurta").addEventListener("click", rkurta);
document.getElementById("RTees").addEventListener("click", rtees);
document.getElementById("Rkids").addEventListener("click", rkids);


document.getElementById("navTees").addEventListener("click", navtees);

function navtees(){
  window.location.href = "navProds.html"
}

function rkurta(){
  window.location.href = "rangmunchKurta.html"
}

function rtees(){
  window.location.href = "byfordTshirts.html"
}

function rkids(){
  window.location.href = "ProductFrocks.html"
}


function bedSheets(){
  window.location.href = "productBedSheets.html";
}

function frocksPage(){
  window.location.href = "ProductFrocks.html"
}

function style69(){
  window.location.href = "ProductAt69.html"
}

function faballey(){
  window.location.href = "ProductFaballey.html"
}



function under399(){
    window.location.href = "Product399.html";
}

function under699(){
  window.location.href = "product699.html";
}

function under999(){
  window.location.href = "product999.html";
}



function softSnugles(){
    window.location.href = "ProductSnuggles.html";
}

function easyTees(){
  window.location.href = "ProductTees.html"
}

function sunnyDays (){
  window.location.href = "ProductSunny.html"
} 

function ethnicVibes (){
  window.location. href = "ProductEthnic.html"
}

// Selva's Work on login

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

