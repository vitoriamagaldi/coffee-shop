let menu = document.querySelector('#menu-btn');
let nav = document.querySelector('.header .navbar');

menu.onclick = () =>{
    nav.classList.toggle('active');
    menu.classList.toggle('fa-times')
}