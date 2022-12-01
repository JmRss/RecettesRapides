const card = document.querySelector('.card');
const card2 = document.querySelector('.card--2');
const card3 = document.querySelector('.card--3');
const card4 = document.querySelector('.card--4');
const card5 = document.querySelector('.card--5');
const body =  document.querySelector('.container');
const h2 = document.querySelector('.color-change');
const h2Bis = document.querySelector('.color-change_bis'); 
const text = document.querySelector('.text_appear');
const hover = document.queryCommandValue('.hov');
const scrollTop = document.querySelector('.arrow');

//menu burger
const menuBurger = document.querySelector('.menu-burger');
const navLinks = document.querySelector('.nav-links');
//event menu burger
menuBurger.onclick = () => {
    navLinks.classList.toggle('mobile-menu')
}

new Typewriter(text, {
    //boucle l'animation
    loop:true,
    deleteSpeed: 20
})
//écrire du texte de façon "direct". changeDelay change la vitesse d'apparition en ms
.changeDelay(50)
.typeString('Cuisinez :<span style="color: #97F03F">  équilibré,</span>')
.pauseFor(500)
.deleteChars(10)
.typeString('<span style="color: #44FCEA">facilement,</span>')
.pauseFor(500)
.deleteChars(11)
.typeString('<span style="color: #FF6B00">rapidement</strong> !!!</span>')
.pauseFor(2000)
.start();

//bouton de scroll en haut de la page
scrollTop.onclick = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
}

card.onclick = () => {
    card.classList.toggle('flip'); 
    body.classList.toggle('body--flip'); 
    h2.classList.toggle('h2--flip');
    h2Bis.classList.toggle('h2--flip');
}
card2.onclick = () => {
    card2.classList.toggle('flip'); 
    body.classList.toggle('body--flip'); 
    h2.classList.toggle('h2--flip');
    h2Bis.classList.toggle('h2--flip');
}
card3.onclick = () => {
    card3.classList.toggle('flip'); 
    body.classList.toggle('body--flip'); 
    h2.classList.toggle('h2--flip');
    h2Bis.classList.toggle('h2--flip');
}
card4.onclick = () => {
    card4.classList.toggle('flip'); 
    body.classList.toggle('body--flip'); 
    h2.classList.toggle('h2--flip');
    h2Bis.classList.toggle('h2--flip');
}
card5.onclick = () => {
    card5.classList.toggle('flip'); 
    body.classList.toggle('body--flip'); 
    h2.classList.toggle('h2--flip');
    h2Bis.classList.toggle('h2--flip');
}
