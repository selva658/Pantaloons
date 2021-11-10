var favdatas=JSON.parse(localStorage.getItem("favdata"))
console.log(favdatas);

showProducts(favdatas)
function showProducts(event) {

event.map(function (item) {
 var imgs = document.createElement("img");
 imgs.setAttribute("src", item.image_url);
 imgs.setAttribute("id", "imageSizing");

 var type = document.createElement("p");
 type.textContent = item.type;
 type.setAttribute("class", "paraStyle");

 var description = document.createElement("p");
 description.textContent = item.dsc;
 description.setAttribute("class", "paraStyle1");

 var x = document.createElement("div");
 x.setAttribute("id", "x");

 var price = document.createElement("span");
 price.textContent = "₹" + item.MRP;
 price.setAttribute("class", "pricing");

 var disc = document.createElement("span");
 disc.textContent = "₹" + item.discount;
 disc.setAttribute("id", "discStyle");

 var discPer = document.createElement("span");
 discPer.textContent = item.discountPercentage;
 discPer.setAttribute("id", "discPerStyle");

 x.append(price, disc, discPer);

 var imgDiv = document.createElement("div");
 imgDiv.setAttribute("id", "img");

var btn=document.createElement("button")
btn.setAttribute("class","btnremove")
btn.textContent="Remove";
btn.addEventListener("click",function(){
  remove(item)
})


 imgDiv.append(imgs, type, description, x,btn);

 document.getElementById("images").append(imgDiv);
 // imgDiv.append(x);
});
}

function remove(item){
favdatas.splice(item,1)
localStorage.setItem("favdata",JSON.stringify(favdatas))
window.location.reload(true)
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
