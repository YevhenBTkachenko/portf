const btn__burger = document.querySelector("#btn-burger");
const sidebar_left_ul = document.querySelector("#sidebar_left_ul");
const toggleMenu = () => {
  sidebar_left_ul.classList.toggle("menu-open");
  btn__burger.classList.toggle("btn-close");
};
btn__burger.onclick = toggleMenu;

const menuBtns = document.querySelectorAll(".menu-item");
menuBtns.forEach((btn) => {
  btn.onclick = toggleMenu;
});