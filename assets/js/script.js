/* 
const screenWidth = document.documentElement.clientWidth;
if (screenWidth > 768) {
  menuList.style.display = 'flex';
  console.log('aee')
}
console.log(screenWidth);


 */




const menuMobile = () => {
  let btnMenu = document.querySelector('.list-hamburguer');
  btnMenu.addEventListener('click', openMenu);
}

const openMenu = () => {
  let menuList = document.querySelector('.menu-list');
  menuList.style.display = menuList.style.display === 'flex' ? 'none' : 'flex';
}

menuMobile();
