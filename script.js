const menuIcon = document.getElementById('menu-icon');
const menuItems = document.getElementById('menu-items');
const mainNav = document.getElementById('main-nav');
const sticky = mainNav.offsetTop;

menuIcon.addEventListener('click', () => {
  menuItems.classList.toggle('inactive');
});

window.onscroll = function () {
  stickyNav()
};

function stickyNav() {
  if (window.pageYOffset > sticky + 1) {
    mainNav.classList.add("sticky");
  } else {
    mainNav.classList.remove("sticky");
  }
}