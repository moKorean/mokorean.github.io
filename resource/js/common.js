const menu = document.querySelector('.menu');
const menuPosition = menu.getBoundingClientRect().top + window.pageYOffset;

const stickyMenu = () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll >= menuPosition) {
    menu.classList.add('sticky');
  } else {
    menu.classList.remove('sticky');
  }
};

window.addEventListener('scroll', stickyMenu);