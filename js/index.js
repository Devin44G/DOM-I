const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Create selectors by using any of the DOM element's methods
let ctaImg = document.querySelector('#cta-img');
let midImg = document.querySelector('#middle-img');

// Note that IDs have been used on all images. Use the IDs to update src path content
ctaImg.setAttribute('src', siteContent['cta']['img-src']);
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

/* Using your selectors, update the content to match the example file. */
// NAV
let nav1 = document.querySelector('.container header nav a:nth-child(1)');
    nav1.textContent = siteContent['nav']['nav-item-1'];

let nav2 = document.querySelector('.container header nav a:nth-child(2)');
    nav2.textContent = siteContent['nav']['nav-item-2'];

let nav3 = document.querySelector('.container header nav a:nth-child(3)');
    nav3.textContent = siteContent['nav']['nav-item-3'];

let nav4 = document.querySelector('.container header nav a:nth-child(4)');
    nav4.textContent = siteContent['nav']['nav-item-4'];

let nav5 = document.querySelector('.container header nav a:nth-child(5)');
    nav5.textContent = siteContent['nav']['nav-item-5'];

let nav6 = document.querySelector('.container header nav a:nth-child(6)');
    nav6.textContent = siteContent['nav']['nav-item-6'];

// CTA
let ctaH1 = document.querySelector('.cta-text h1');
    ctaH1.textContent = siteContent['cta']['h1'];
    let linebreak = document.createElement('br');

let ctaBtn = document.querySelector('.cta-text button');
    ctaBtn.textContent = siteContent['cta']['button'];

// MAIN
let section1h4 = document.querySelector('.top-content .text-content:nth-child(1) h4');
    section1h4.textContent = siteContent['main-content']['features-h4'];
let section1p = document.querySelector('.top-content .text-content:nth-child(1) p');
    section1p.textContent = siteContent['main-content']['features-content'];

let section2h4 = document.querySelector('.top-content .text-content:nth-child(2) h4');
    section2h4.textContent = siteContent['main-content']['about-h4'];
let section2p = document.querySelector('.top-content .text-content:nth-child(2) p');
    section2p.textContent = siteContent['main-content']['about-content'];

let section3h4 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
    section3h4.textContent = siteContent['main-content']['services-h4'];
let section3p = document.querySelector('.bottom-content .text-content:nth-child(1) p');
    section3p.textContent = siteContent['main-content']['services-content'];

let section4h4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
    section4h4.textContent = siteContent['main-content']['product-h4'];
let section4p = document.querySelector('.bottom-content .text-content:nth-child(2) p');
    section4p.textContent = siteContent['main-content']['product-content'];

let section5h4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
    section5h4.textContent = siteContent['main-content']['vision-h4'];
let section5p = document.querySelector('.bottom-content .text-content:nth-child(3) p');
    section5p.textContent = siteContent['main-content']['vision-content'];

// CONTACT
let contacth4 = document.querySelector('.contact h4');
    contacth4.textContent = siteContent['contact']['contact-h4'];

let address = document.querySelector('.contact p:nth-child(2)');
    address.textContent = siteContent['contact']['address'];

let phone = document.querySelector('.contact p:nth-child(3)');
    phone.textContent = siteContent['contact']['phone'];

let email = document.querySelector('.contact p:nth-child(4)');
    email.textContent = siteContent['contact']['email'];

// FOOTER
let footer = document.querySelector('footer p');
    footer.textContent = siteContent['footer']['copyright'];

// Change the color of the navigation text to be green.
let navText = document.querySelectorAll('.container header nav a');
    navText.forEach(link => link.style.color = 'seagreen');

// Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you want.
let nav = document.querySelector('.container header nav');
let startAnchor = document.createElement('a');
    startAnchor.textContent = 'Appended';
    startAnchor.style.cursor = 'pointer';
    startAnchor.style.color = 'seagreen';
    nav.appendChild(startAnchor);

let endAnchor = document.createElement('a');
    endAnchor.textContent = 'Prepended';
    endAnchor.style.cursor = 'pointer';
    endAnchor.style.color = 'seagreen';
    nav.prepend(endAnchor);

// *STRETCH*: Update styles throughout the page as you see fit. Study what happens when you updated the DOM using style in JavaScript.
let navBorder = document.querySelector('header');
    navBorder.style.backgroundColor = 'gainsboro';
    navBorder.style.padding = '0 2rem 2rem';

let sectionTitle = document.querySelectorAll('h4, h1');
    sectionTitle.forEach(title => title.style.color = 'seagreen');

let footerStyle = document.querySelector('footer');
    footerStyle.style.backgroundColor = 'gainsboro';
    footerStyle.style.padding = '2rem 0';
    footerStyle.style.marginBottom = '0';
