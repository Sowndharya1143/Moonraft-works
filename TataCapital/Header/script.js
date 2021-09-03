var header = document.getElementById("nav-item");
var li = header.getElementsByClassName("listitem");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
  document.getElementsByClassName("header-active")[0].classList.remove("header-active");
  event.target.className += " header-active";
  });
}
var nav = document.getElementById("menu-nav");
var navList = nav.getElementsByClassName("nav-list");
for (var i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", function() {
  document.getElementsByClassName("menu-active")[0].classList.remove("menu-active");
  event.target.className += " menu-active";
  });
}
document.getElementById("show-more").addEventListener("click",showMore);
document.getElementById("show-less").addEventListener("click",showLess);
function showMore(){
    document.getElementsByClassName("showmore")[0].style.display="none";
    document.getElementsByClassName("odd-card")[0].style.display="block";
    document.getElementsByClassName("hidden-cardItem")[0].style.display="flex";
}
function showLess(){
    document.getElementsByClassName("showmore")[0].style.display="block";
    document.getElementsByClassName("odd-card")[0].style.display="none";
    document.getElementsByClassName("hidden-cardItem")[0].style.display="none";
}