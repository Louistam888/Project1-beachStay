const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => { 
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelectorAll(".navLink").forEach(menuLi => menuLi.addEventListener("click", () => {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
}));


/*created using the javascript hamburger menu tutorial on youTube by codefoxx
https://www.youtube.com/watch?v=flItyHiDm7E*/