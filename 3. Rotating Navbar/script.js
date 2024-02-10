let opened = document.getElementById('open');
let closed = document.getElementById('close');
let container = document.querySelector('.container');


opened.addEventListener('click', () => {
    container.classList.add("show-nav");
})

closed.addEventListener('click', () => {
    container.classList.remove("show-nav");
})