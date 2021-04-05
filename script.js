const mainNav = document.getElementById('main-nav')
const menuIcon = document.getElementById('menu-icon')
const menuItems = document.getElementById('menu-items')
const navCartIcon = document.getElementById('shopping-cart-icon')
// const navCartItemsNum = document.getElementById('num-cart-items')
const sticky = mainNav.offsetTop
const shoppingCart = document.getElementById('shopping-cart')
const closeCart = document.getElementById('close-cart')


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

navCartIcon.addEventListener('click', () =>
  shoppingCart.classList.toggle('hide-cart')
)

closeCart.addEventListener('click', () =>
  shoppingCart.classList.toggle('hide-cart')
)





function stickyNav() {
  if (window.pageYOffset > sticky + 1) {
    mainNav.classList.add("sticky");
  } else {
    mainNav.classList.remove("sticky");
  }
}

function hideCart() {

}
