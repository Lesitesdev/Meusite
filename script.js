/* menu hamburguer */

const menuHamburguer = document.querySelector('.menu-hamburguer');

menuHamburguer.addEventListener('click', toggleMenu);

function toggleMenu() {
  const nav = document.querySelector('.nav-responsive');
  menuHamburguer.classList.toggle('change');

  if (menuHamburguer.classList.contains('change')) {
    nav.style.display = 'block'; // Corrigido aqui
  } else {
    nav.style.display = 'none'; // Corrigido aqui
  }
}


window.onload = function() {
  const homeContent = document.querySelector('.home-conten');
  homeContent.style.opacity = 1; // Torna o conteúdo visível após o carregamento
};