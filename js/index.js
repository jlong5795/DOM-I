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
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation Link Text
const nav = document.querySelectorAll('nav a');
nav.forEach((element, index) => {
  element.textContent = siteContent['nav'][`nav-item-${index+1}`];
});

//Page Main Header
let title = document.getElementsByTagName('h1');
title[0].textContent = siteContent['cta']['h1'];

//Button
let button = document.getElementsByTagName('button');
button[0].textContent = siteContent['cta']['button'];

//Image
let image = document.getElementById('cta-img');
image.src = siteContent['cta']["img-src"];

//Top Content
let topContentHeader = document.querySelectorAll('.top-content > .text-content > h4');
topContentHeader[0].textContent = siteContent['main-content']['features-h4'];
topContentHeader[1].textContent = siteContent['main-content']['about-h4'];

let topContentContent = document.querySelectorAll('.top-content > .text-content > p');
topContentContent[0].textContent = siteContent['main-content']['features-content'];
topContentContent[1].textContent = siteContent['main-content']['about-content'];

//Middle Image
let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

//Bottom Content
let bottomContentHeader = document.querySelectorAll('.bottom-content > .text-content > h4');
bottomContentHeader[0].textContent = siteContent['main-content']['services-h4'];
bottomContentHeader[1].textContent = siteContent['main-content']['product-h4'];
bottomContentHeader[2].textContent = siteContent['main-content']['vision-h4'];

let bottomContentContent = document.querySelectorAll('.bottom-content > .text-content > p');
bottomContentContent[0].textContent = siteContent['main-content']['services-content'];
bottomContentContent[1].textContent = siteContent['main-content']['product-content'];
bottomContentContent[2].textContent = siteContent['main-content']['vision-content'];

//Contact
let contactHeader = document.querySelector('.contact > h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contactSection = document.querySelectorAll('.contact > p');
contactSection[0].textContent = siteContent['contact']['address'];
contactSection[1].textContent = siteContent['contact']['phone'];
contactSection[2].textContent = siteContent['contact']['email'];

//Footer
let footer = document.querySelector('footer > p');
footer.textContent = siteContent['footer']['copyright'];