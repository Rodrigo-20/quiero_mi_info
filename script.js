const changeSize = (e) => {
    console.log(e.target.innerWidth)

}
const menu = document.querySelector('.menu');
const icon = document.querySelector('.burguer-icon')
const nav = document.querySelector('nav');
const wraper = document.querySelector('.top');

window.addEventListener('resize', changeSize);

icon.addEventListener('click', () => {
    menu.classList.toggle("close");
    nav.classList.toggle('slideOut');
    wraper.classList.toggle("active");
})