document.getElementById("offerPrice").addEventListener("click", active);
document.getElementById("handBags").addEventListener("click", active);
document.getElementById("stylesAt").addEventListener("click", active);
document.getElementById("lastOf").addEventListener("click", active);


document.getElementById("under399").addEventListener("click", under);
document.getElementById("under699").addEventListener("click", under);
document.getElementById("under999").addEventListener("click", under);



document.getElementById("hotDeals").addEventListener("click", deals);
document.getElementById("hotDeals1").addEventListener("click", deals);
document.getElementById("hotDeals2").addEventListener("click", deals);
document.getElementById("hotDeals3").addEventListener("click", deals);


function active(){
  window.location.href = "product.html";
}

function under(){
    window.location.href = "under.html";
}

function deals(){
    window.location.href = "hot_deals.html";
}