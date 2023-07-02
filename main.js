const navBar = document.querySelector('.nav-bar');
const main = document.querySelector('main');
const icon = document.querySelector('.menu-icon');
const dropdown = document.querySelector('#dropdown');
const overlay = document.querySelector('#overlay');
const imgTextBoxes = document.querySelectorAll('.grid-box-img-container');

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

// Change the class of the image with an overlay that is clicked.
imgTextBoxes.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.target.classList.toggle('clicked');
        const pTagChild = event.target.querySelector('p');
        if(pTagChild.classList.contains('show')) {
            pTagChild.classList.remove('show');
        } else {
            setTimeout(() => {
                pTagChild.classList.add('show');
              }, 450);
        }
        console.log(event.target.id);
        console.log(event.target.classList);
    });
});

// Move the 'outlier'-img to the leftmost column of the timeline-grid.
function moveOutlierDiv() {
    const leftColumn = document.querySelector('#timeline-grid-column-left');
    const rightColumn = document.querySelector('#timeline-grid-column-right');
    const outlierDiv = document.querySelector('#grid-box-img-outlier-container');

    if(window.innerWidth <= 768) {
        leftColumn.appendChild(outlierDiv);
        rightColumn.removeChild(outlierDiv);
    }
}

moveOutlierDiv();