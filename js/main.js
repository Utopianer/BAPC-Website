// Hide Menu
document
  .getElementById("hideMenuIcon")
  .addEventListener("click", menuBtnHandleClick);

function menuBtnHandleClick() {
  document.getElementById("mobHideMenu").classList.toggle("show");
  document.getElementById("hideMenuIcon").classList.toggle("is-active");
}
