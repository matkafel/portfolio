const logo = document.querySelector('.logo');
const open = document.querySelector('.open-close-btn');
const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('#hamburger-icon');
const toggler = document.body;
const bars = document.querySelectorAll('.bar');
const loader = document.getElementsByTagName('span');

open.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.toggle('overlay-open');
    hamburger.classList.toggle('hamburger-open');

    if (overlay.classList.toggle('actie')) {
        logo.style.backgroundImage = "url('./img/white.png')";
    } else {
        logo.style.backgroundImage = "url('./img/black.png')";
    }

})


document.getElementById('dark-mode-btn').addEventListener('click', function (e) {
    const target = e.target;
    toggler.classList.toggle('dark-mode');
    target.classList.toggle('fa-moon');
    target.classList.toggle('fa-sun');

    const barsColorChange = () => {
        for (let i = 0; i < bars.length; i++)
            toggler.classList.contains('dark-mode') ? bars[i].style.backgroundColor = '#fff' : bars[i].style.backgroundColor = '#222';
    }

    const loaderColorChange = () => {
        for (let i = 0; i < loader.length; i++)
            toggler.classList.contains('dark-mode') ? loader[i].style.borderColor = '#586E5E' : loader[i].style.borderColor = '#222';
    }

    if (toggler.classList.contains('dark-mode')) {
        logo.style.backgroundImage = "url('./img/white.png')";

        barsColorChange()
        loaderColorChange()

    } else {
        logo.style.backgroundImage = "url('./img/black.png')";

        barsColorChange()
        loaderColorChange()
    }
});











