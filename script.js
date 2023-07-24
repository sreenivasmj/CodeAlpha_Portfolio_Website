document.addEventListener("DOMContentLoaded", function () {
    /* ... (previous JavaScript code) */

    // Animate experience and education sections on scroll
    const experienceItems = document.querySelectorAll(".experience-item");
    const educationItems = document.querySelectorAll(".education-item");

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    function animateOnScroll() {
        experienceItems.forEach((item) => {
            if (isElementInViewport(item)) {
                item.classList.add("animate");
            }
        });

        educationItems.forEach((item) => {
            if (isElementInViewport(item)) {
                item.classList.add("animate");
            }
        });
    }

    animateOnScroll(); // To trigger animation on page load

    window.addEventListener("scroll", animateOnScroll);

    // Show scroll-to-top button when scrolling down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollButton.classList.add("show");
        } else {
            scrollButton.classList.remove("show");
        }
    });

    /* ... (previous JavaScript code) */
});
