const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

const hamburgerToggle = () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
}

const closeHamburgerOnClick = () => {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
}

hamburger.addEventListener("click", hamburgerToggle);
document.querySelectorAll(".navLink").forEach(menuLi => menuLi.addEventListener("click", closeHamburgerOnClick));

/*created using the javascript hamburger menu tutorial on youTube by codefoxx
https://www.youtube.com/watch?v=flItyHiDm7E*/


