// Smooth Scroll for Navigation Links
// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

closeMenu.addEventListener('click', function() {
    navLinks.classList.remove('active');
});
// document.getElementById('hamburger').addEventListener('click', function() {
//     document.getElementById('navLinks').classList.toggle('active');
// });

// Form Submission with Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
        // Optionally, you could send the data to a server here
    } else {
        alert('Please fill in all fields.');
    }
});
// Array of background images
const backgrounds = [
 
    'url("imgs/oil1.png")',
    'url("imgs/oil2.png")',
    'url("imgs/oil3.png")',
    'url("imgs/risk1.png")',
    'url("imgs/safety1.png")',
    'url("imgs/marine3.png")',
    'url("imgs/safety2.png")'
];

let currentBackground = 0;

// Function to change background image
function changeBackground() {
    const homeSection = document.getElementById('home');
    homeSection.style.backgroundImage = backgrounds[currentBackground];
    currentBackground = (currentBackground + 1) % backgrounds.length;
}

// Initial background set
changeBackground();

// Change background every 5 seconds
setInterval(changeBackground, 5000);
// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add scroll event listener
 document.addEventListener('scroll', function() {
   const contactSection = document.getElementById('contact');

  if (isInViewport(contactSection)) {
       contactSection.classList.add('animate');
     }
 });

const upArrow = document.getElementById('upArrow');

upArrow.addEventListener("click", getToTheTop);

function getToTheTop(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
});
}