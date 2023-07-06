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

// Make the text next to the timeline display as an opaque, white rectangle when the image is clicked.
// The issue is that a height of 'fit-content' can't be transitioned smoothly in CSS.
function defineOriginalHeight() {
    textOverlayOriginalHeight = document.getElementById('about-us-img-overlay-container1').style.height;
}

window.onload = defineOriginalHeight;

function transitionTextAboutUs(textContainerID) {
    // If the window is less wide than 540px:
    if(window.innerWidth <= 540) {
        // Get the height of the text container if it is not inhibited.
        var textContainer = document.getElementById(textContainerID);
        console.log(textContainer.id);
        var sectionHeight = textContainer.scrollHeight;
        console.log(sectionHeight);

        if(textContainer.classList.contains("expanded") == false) {
            requestAnimationFrame(function() {
                textContainer.style.height = textOverlayOriginalHeight + 'px';
                textContainer.style.transitionDelay = '200ms';
                textContainer.style.transitionProperty = 'height';
                textContainer.style.transitionDuration = '200ms';
                textContainer.style.transitionTimingFunction = 'ease-in-out';
                textContainer.classList.remove('expanded');
            })
        } else {
            requestAnimationFrame(function() {
                textContainer.style.height = sectionHeight + 'px';
                textContainer.style.transitionDelay = '200ms';
                textContainer.style.transitionProperty = 'height';
                textContainer.style.transitionDuration = '200ms';
                textContainer.style.transitionTimingFunction = 'ease-in-out';
                textContainer.classList.add('expanded');
            })
        }
    }
}