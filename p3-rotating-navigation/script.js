const hamburger = document.getElementById('menu');
const close = document.getElementById('close');
const rotate = document.getElementById('rotate');
const items = document.getElementById('items');

hamburger.addEventListener('click', () => {
    rotate.classList.add('transform');
    hamburger.classList.add('hide-icon');
    close.classList.remove('hide-icon');
    items.classList.add('show-menu');
});

close.addEventListener('click', () => {
    rotate.classList.remove('transform');
    close.classList.add('hide-icon');
    hamburger.classList.remove('hide-icon');
    items.classList.remove('show-menu');
});