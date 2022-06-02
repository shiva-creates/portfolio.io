const loader = document.getElementById('pre-loader');
const mouseCursor = document.querySelector('.cursor');
const hamButton = document.querySelector('.menu');
const hamMenu = document.getElementById('hamMenu');

hamButton.addEventListener('click', () => {
  console.log('Hello');
  hamMenu.classList.toggle('ham-display');
  hamButton.classList.toggle('menu-active');
});

window.addEventListener('load', () => {
  loader.style.display = 'none';
  document.body.style.overflow = 'unset';
});

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}
