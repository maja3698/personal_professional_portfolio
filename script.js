// import AOS from 'aos';
// AOS.init();

let menu = document.getElementById("menu");
let nav = document.getElementById("navigation");
let exit = document.getElementById("exit");

let desktop = window.matchMedia("(min-width: 1234px)")

const header = document.querySelector(".leftheader")

menu.addEventListener("click", function (e) {
  nav.classList.add("nav-transition");
  // e.preventDefault();
});

exit.addEventListener("click", function (e) {
  nav.classList.remove("nav-transition");
  // e.preventDefault();
});

nav.addEventListener("click", function (e) {
  nav.classList.remove("nav-transition");
});



const keyframes = [
  {
    height: "30vh",
    easing: "ease-in",
  },
  {
    height: "100vh",
    easing: "ease-in",
  },
];

const properties = {
  duration: 750,
  delay: 2,
  iterations: 1,
};


if (desktop.matches){
  header.animate(keyframes, properties);

}
function openNav() {
  document.getElementById("slideNav").style.width = "1000px";
}

function closeNav() {
  document.getElementById("slideNav").style.width = "0";
}







