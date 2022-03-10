const changeSize = (e) => {
    console.log(clickedItem.innerWidth)

}
const menu = document.querySelector('.menu');
const icon = document.querySelector('.burguer-icon')
const nav = document.querySelector('nav');
const wraper = document.querySelector('.top');
const listItems = document.querySelectorAll('.top li');
const list = document.querySelector('ul');

window.addEventListener('resize', changeSize);

icon.addEventListener('click', () => {
    menu.classList.toggle("close");
    nav.classList.toggle('slideOut');
    wraper.classList.toggle("active");
})

list.addEventListener('click', (e) => {

    clickedItem = e.target
    if (clickedItem.tagName === 'LI') {
        listItems.forEach(item => {
            item.classList.remove('active');

        })
        clickedItem.classList.add('active');
        clickedItem.querySelector('a').click();
    }
    else if (clickedItem.parentNode.tagName === 'LI') {
        listItems.forEach(item => {
            item.classList.remove('active');
        })
        clickedItem.parentNode.classList.add('active')
    }


})

// listItems.forEach(item => {
//     item.addEventListener('click', () => {
//         item.classList.add('active');
//     })

// });