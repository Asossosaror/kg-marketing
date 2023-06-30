const navBar = document.querySelector('.nav-bar');
const main = document.querySelector('main');
const icon = document.querySelector('.menu-icon');
const dropdown = document.querySelector('#dropdown');
const overlay = document.querySelector('#overlay');

// Make the navigationg bar slightly transparent when it is scrolled down from it's original state.
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if(scrollPos > main.offsetTop) {
        navBar.classList.add('nav-bar-transparent');
    } else {
        navBar.classList.remove('nav-bar-transparent');
    }
});

// Scroll to the top of the screen. This function is called when the arrow in the footer is clicked.
function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

// This function redirects to another page.
function goTo(href) {
    location.href = href;
}

// When the menu-icon is clicked:
icon.addEventListener('click', () => {
    // Toggle the class 'clicked' on the 'menu-icon' to initialize the animation.
    icon.classList.toggle("clicked");
    dropdown.classList.toggle("show");
    overlay.classList.toggle("dark");
});