const burgerBtn = document.querySelector('#nav-icon1')
const navbar = document.querySelector('.burger__navbar')
const contentToMove = document.querySelector('.balance__container')

burgerBtn.onclick = () => {
    burgerBtn.classList.toggle('open')
    // navbar.classList.toggle('disabled')
    navbar.classList.toggle('opened')
    contentToMove.classList.toggle('active')
}