const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.remove('hidden');
        nav.classList.add('flex'); 
        bar.classList.add('hidden');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.add('hidden');
        nav.classList.remove('flex');
        bar.classList.remove('hidden');
    });
}
