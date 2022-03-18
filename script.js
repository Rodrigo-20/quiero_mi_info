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
        clickedItem.querySelector('a').click();
    }

})
//controla el estilo del nav dependiendo en que parte de la pagina me encuentre 
document.addEventListener('scroll', (e) => {
    listItems.forEach(item => {
        let ref = item.querySelector('a').getAttribute('href');
        let rect = document.querySelector(`${ref}`).getBoundingClientRect();
        let top = rect.top;
        let bottom = rect.bottom;
        console.log(e)
        console.log('bottom : ', top);
        const height = window.innerHeight;
        const topLimit = height * 0.2;
        const bottomLimit = height * 0.8
        if ((top <= topLimit && top >= 0) || (bottom >= bottomLimit && bottom < height)) {
            listItems.forEach(item => {
                item.classList.remove('active')
            });
            item.classList.add('active');
        }

    })
})

// listItems.forEach(item => {
//     item.addEventListener('click', () => {
//         item.classList.add('active');
//     })

// });