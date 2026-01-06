// Smooth scrolling behavior for Nature and Its Beauty site
// Enhances user experience with natural scrolling between sections

document.addEventListener('DOMContentLoaded', function() {
    // Ensure smooth scrolling behavior is applied
    if ('scrollBehavior' in document.documentElement.style) {
        // Native smooth scrolling is supported
        document.documentElement.style.scrollBehavior = 'smooth';
    } else {
        // Fallback for browsers that don't support scroll-behavior
        smoothScrollFallback();
    }

    // Handle anchor links for navigation
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Calculate offset to account for fixed header if there was one
                const offsetTop = targetSection.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll event listener for enhanced experience
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                // Add scroll-based effects here if needed in the future
                ticking = false;
            });
            ticking = true;
        }
    });
});

// Fallback function for browsers without native smooth scroll support
function smoothScrollFallback() {
    // This is a simplified fallback - in production, you might want a more robust solution
    console.log('Smooth scrolling polyfill would be implemented here for older browsers');
}