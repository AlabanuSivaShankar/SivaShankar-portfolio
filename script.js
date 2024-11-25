const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');   

});

window.addEventListener('scroll', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');   

});

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer',   
 'Backend Developer', 'Fullstack Developer', 'Python Developer', 'MERN stack Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
});