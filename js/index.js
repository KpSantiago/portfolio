const mh = document.querySelector('.mh');
const header = document.querySelector('.header');

mh.addEventListener('click', () => {
    header.classList.toggle('actived')
    mh.classList.toggle('actived')
})