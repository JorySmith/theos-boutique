const menuIcon = document.getElementById('menu-icon');
const menuItems = document.getElementById('menu-items');
const mainNav = document.getElementById('main-nav');
const sticky = mainNav.offsetTop;

// if menu-items max-height, menu-items.style.maxHeight = null
// else menu-items.style.maxHeight = panel.scrollHeight + "px"
// ergo, if menu-items is showing, a click changes MH to null, hiding it
// if menu-items is hidden, a click changes MH to menu-items' scrollHeight in px
menuIcon.addEventListener('click', () => {
  if (menuItems.style.maxHeight) {
    menuItems.style.maxHeight = null;
  } else {
    menuItems.style.maxHeight = menuItems.scrollHeight + "px";
  }
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

