
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {

    $('a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top -60)
                }, 1200, "easeInOutExpo");
                return false;
            }
        }
    });

});

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');  // Adjust selector if needed
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item a');
    let currentSection = '';
  
    // Check which section is currently in the viewport
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;  // Adjust for navbar height if necessary
      const sectionHeight = section.offsetHeight;
  
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');  // Get the id of the currently visible section
      }
    });
  
    // Remove the active class from all navbar links
    navLinks.forEach((link) => {
      link.classList.remove('active');
      // Add the active class to the corresponding navbar item
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
  