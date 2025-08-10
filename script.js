// Ensure code runs when DOM is fully loaded
$(document).ready(function () {

    // --- Window scroll handler ---
    $(window).scroll(function () {
        // Sticky navbar on scroll
        if ($(this).scrollTop() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Show/hide scroll-up button
        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // --- Scroll UP button click ---
    $('.scroll-up-btn').click(function () {
        // Instantly scroll to top
        $('html').animate({ scrollTop: 0 });
        // Remove smooth scroll after slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // --- Smooth scroll for menu links ---
    $('.navbar .menu li a').click(function () {
        // Re-enable smooth scrolling
        $('html').css("scrollBehavior", "smooth");
    });

    // --- Mobile menu toggle ---
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");    // Show/hide navigation links
        $('.menu-btn i').toggleClass("active");      // Animate hamburger icon
    });

    // --- Typed.js animation for home/about titles ---
    const typingOptions = {
        strings: [
            "Full Stack Developer",
            "Software Development Engineer",
            "Android Developer",
            "Web Developer",
            "Freelancer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };
    // Typing effect for main and about section
    new Typed(".typing", typingOptions);
    new Typed(".typing-2", typingOptions);

    // --- Owl Carousel for projects (teams section) ---
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,          // Correct key for Owl Carousel is 'autoplayTimeout'
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

});
