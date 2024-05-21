window.addEventListener('DOMContentLoaded', (event) => {
    var navbarToggler = document.querySelector('.navbar-toggler-2');
    var navbarCollapse = document.querySelector('.navbar-collapse-2');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('active');
    });
});

let accesariLinkuri = {}; 

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        const numeLink = link.textContent;
        if (accesariLinkuri[numeLink]) {
            accesariLinkuri[numeLink]++;
        } else {
            accesariLinkuri[numeLink] = 1;
        }
        console.log('Contorizare accesare:', accesariLinkuri);
    });
});
