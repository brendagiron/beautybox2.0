const slider = document.querySelector('.slider-container');
const leftButton = document.querySelector('.slider-left-button');
const rightButton = document.querySelector('.slider-right-button');

rightButton.addEventListener('click', () => {
  slider.scrollBy({
    left: 350, // Largura do card + margem direita
    behavior: 'smooth'
  });
});

leftButton.addEventListener('click', () => {
  slider.scrollBy({
    left: -350,
    behavior: 'smooth'
  });
});