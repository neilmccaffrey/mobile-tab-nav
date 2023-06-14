const imgs  = document.querySelectorAll('.content')
const items  = document.querySelectorAll('nav ul li')

items.forEach((item, i) => {
    item.addEventListener('click', () => {
        hideImgs()
        hideItems()

        item.classList.add('active')
        imgs[i].classList.add('show')

    })
}) 


function hideImgs(){
    imgs.forEach(img => img.classList.remove('show'))
}

function hideItems(){
    items.forEach(item => item.classList.remove('active'))
}