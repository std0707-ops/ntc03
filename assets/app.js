const menuButton = document.querySelector('.menu');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('.lookup form').addEventListener('submit', event => {
  event.preventDefault();
  const plate = document.querySelector('#plate');
  if (!plate.value.trim()) return;
  document.querySelector('.result-plate').textContent = `車牌 ${plate.value.trim().toUpperCase()}`;
  document.querySelector('.result').hidden = false;
});
