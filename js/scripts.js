document.addEventListener('DOMContentLoaded', function() {
  // Preloader fade out (if you include a preloader element in your HTML)
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(function() {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
    }, 1500);
  }
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Scroll-triggered animations
  const scrollElements = document.querySelectorAll('.animate-on-scroll');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('appear');
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove('appear');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  window.addEventListener('scroll', handleScrollAnimation);
});
