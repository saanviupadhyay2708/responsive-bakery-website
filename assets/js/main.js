/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the bg-header class
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, // Animations repeat
})

sr.reveal(`.home__data, .products__container, .about__img, .features__content`)
sr.reveal(`.about__data, .featured__image`, {origin: 'bottom'})
sr.reveal(`.home__image`, {origin: 'right'})
sr.reveal(`.featured__data, .count__item`, {origin: 'left', interval: 100})

/*=============== PROMO BANNER SLIDER ===============*/
const promoContainer = document.querySelector('.promo-container');
let currentIndex = 0;
const promoItems = promoContainer.querySelectorAll('p');
const itemWidth = promoContainer.clientWidth;

// Hide all promo items except first one on mobile
function updatePromoDisplay() {
    if (window.innerWidth < 768) {
        promoItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    } else {
        promoItems.forEach(item => {
            item.style.display = 'block';
        });
    }
}

// Auto rotate promo messages on mobile
function rotatePromoItems() {
    if (window.innerWidth < 768) {
        currentIndex = (currentIndex + 1) % promoItems.length;
        updatePromoDisplay();
    }
}

// Initialize promo display
updatePromoDisplay();

// Set interval for rotation (5 seconds)
setInterval(rotatePromoItems, 5000);

// Update promo display on window resize
window.addEventListener('resize', updatePromoDisplay);

/*=============== ADD TO CART FUNCTIONALITY ===============*/
const cartButton = document.querySelector('.nav__cart');
let cartCount = 0;

// Create cart count indicator
const cartIndicator = document.createElement('span');
cartIndicator.className = 'cart__count';
cartIndicator.textContent = cartCount;
cartIndicator.style.position = 'absolute';
cartIndicator.style.top = '-5px';
cartIndicator.style.right = '-5px';
cartIndicator.style.backgroundColor = 'var(--accent-color)';
cartIndicator.style.color = 'var(--title-color)';
cartIndicator.style.borderRadius = '50%';
cartIndicator.style.width = '18px';
cartIndicator.style.height = '18px';
cartIndicator.style.fontSize = '10px';
cartIndicator.style.display = 'flex';
cartIndicator.style.justifyContent = 'center';
cartIndicator.style.alignItems = 'center';
cartIndicator.style.fontWeight = 'var(--font-bold)';
cartIndicator.style.visibility = 'hidden';

// Add cart indicator to cart button
cartButton.style.position = 'relative';
cartButton.appendChild(cartIndicator);

// Add click event to "ORDER NOW" and "START BAKING" buttons
const orderButtons = document.querySelectorAll('.button');
orderButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        cartCount++;
        cartIndicator.textContent = cartCount;
        cartIndicator.style.visibility = 'visible';
        
        // Add animation effect
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 200);
        
        // Show added to cart message
        const message = document.createElement('div');
        message.textContent = 'Added to cart!';
        message.style.position = 'fixed';
        message.style.bottom = '20px';
        message.style.left = '50%';
        message.style.transform = 'translateX(-50%)';
        message.style.backgroundColor = 'var(--accent-color)';
        message.style.color = 'var(--title-color)';
        message.style.padding = '10px 20px';
        message.style.borderRadius = '20px';
        message.style.fontWeight = 'var(--font-semi-bold)';
        message.style.zIndex = '1000';
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.opacity = '0';
            message.style.transition = 'opacity 0.5s';
            setTimeout(() => {
                document.body.removeChild(message);
            }, 500);
        }, 2000);
    });
});

/*=============== IMAGE HOVER EFFECT ===============*/
const productImages = document.querySelectorAll('.products__img');
productImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });
    
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

