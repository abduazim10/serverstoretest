const menuIcon = document.getElementById('menu-icon');
const header = document.querySelector('header');

menuIcon.addEventListener('click', function() {
    header.classList.toggle('menu-active');
    

    if (!header.classList.contains('menu-active')) {
        document.querySelector('.hnav').style.display = 'none';
    } else {
        document.querySelector('.hnav').style.display = 'flex';
    }
});