// Hide Menu
document
  .getElementById("hideMenuIcon")
  .addEventListener("click", menuBtnHandleClick);

function menuBtnHandleClick() {
  document.getElementById("mobHideMenu").classList.toggle("show");
  document.getElementById("hideMenuIcon").classList.toggle("is-active");
}

$(window).scroll(function () {
  var currentPosition = window.scrollY;
  console.log(currentPosition);
  if (currentPosition > 60) {
    $("#mobHideMenu").css("background", "black");
  } else {
    $("#mobHideMenu").css("background", "unset");
  }
});
