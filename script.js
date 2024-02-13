window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#f4f4f4'; // Change background color on scroll
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});
