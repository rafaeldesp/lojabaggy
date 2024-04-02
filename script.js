const close = document.getElementById('close');
const bar = document.getElementById('bar');
const nav = document.getElementsByClassName('menu');

if (bar && nav.length > 0) {
    bar.addEventListener('click', () => {
        // Iterar sobre a coleção de elementos 'menu' e adicionar a classe 'active' a cada um deles
        for (let i = 0; i < nav.length; i++) {
            nav[i].classList.add('active');
        }
    });
};

if (close && nav.length > 0) {
    close.addEventListener('click', () => {
        // Iterar sobre a coleção de elementos 'menu' e adicionar a classe 'active' a cada um deles
        for (let i = 0; i < nav.length; i++) {
            nav[i].classList.remove('active');
        }
    });
};