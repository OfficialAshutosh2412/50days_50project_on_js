const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')


left.addEventListener('mouseenter', ()=>container.classList.add('hovered-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hovered-left'))


right.addEventListener('mouseenter', ()=>container.classList.add('hovered-right'))
right.addEventListener('mouseleave', ()=>container.classList.remove('hovered-right'))