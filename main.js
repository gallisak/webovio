const button = document.getElementById("button");
const menu = document.querySelector(".burger-menu");
const menu_a = document.getElementById("menu_a");
const mobile_btn = document.querySelector(".mobile-btn");

button.addEventListener("click", () => {
  button.classList.toggle("btn_burger_toggle");
  menu.classList.toggle("burger-menu-show");

  setTimeout(() => {
    menu_a.classList.toggle("block");
  }, 100);

  mobile_btn.classList.remove("none");
  mobile_btn.classList.add("block");
});

mobile_btn.addEventListener("click", () => {
  button.classList.toggle("btn_burger_toggle");
  menu.classList.remove("burger-menu-show");

  setTimeout(() => {
    menu_a.classList.toggle("block");
    mobile_btn.classList.toggle("block");
  }, 100);
});
