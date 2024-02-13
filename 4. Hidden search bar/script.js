let inputfield = document.getElementById('input');
let btn = document.getElementById('with-js');
let search = document.getElementById('search');

btn.addEventListener('click', () => {
    search.classList.toggle("active");
    inputfield.focus();
})