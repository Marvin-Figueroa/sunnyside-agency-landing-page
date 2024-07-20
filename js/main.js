document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("icon-hamburger");
  const menuList = document.getElementById("menu");

  menuIcon.addEventListener("click", () => menuList.classList.toggle("hidden"));
});
