const navBar = document.querySelector('.nav-bar');
const main = document.querySelector('main');

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