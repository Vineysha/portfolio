/*MENU SHOW AND HIDDEN*/
const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')

/*SHOW*/
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*REMOVE THE MENU*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction (){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*SCROLL TO ACTIVE LINK*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)



