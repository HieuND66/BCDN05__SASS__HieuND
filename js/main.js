window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    // var bodyScroll = document.body 
    // console.log(bodyScroll.scrollTop);
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.querySelector(".navbar-nav").style.height = "48px";
        document.querySelector(".header .btn_pri").style.padding = "0.9em 1.5em";
        document.querySelector("#navbarTabula img").style.display = "none";
        document.querySelector("header").style.boxShadow = "0 0 10px 0 rgba(204, 204, 204, 0.5)";
        document.querySelector("header").style.backgroundColor = "#fff";
    } else {
        document.querySelector(".navbar-nav").style.height = "80px";
        document.querySelector(".header .btn_pri").style.padding = "1.2em 1.5em";
        document.querySelector("#navbarTabula img").style.display = "block";
        document.querySelector(".header").style.boxShadow = "0 0 0 0px #fff";
        document.querySelector(".header").style.backgroundColor = "transparent";
    }
}