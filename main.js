const button = document.getElementById("button");
const menu = document.querySelector(".burger-menu");
const menu_a = document.getElementById("menu_a");

button.addEventListener("click", () => {
  button.classList.toggle("btn_burger_toggle");
  menu.classList.toggle("burger-menu-show");

  setTimeout(() => {
    menu_a.classList.toggle("block");
  }, 100);
});
