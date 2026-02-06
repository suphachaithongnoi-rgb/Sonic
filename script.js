// Hide preloader when page is fully loaded
window.addEventListener('load', function() {
    document.getElementById('preloader').classList.add('hidden');
});

// Scroll Animation Logic
const sections = document.querySelectorAll('.animated-section');
const options = {
    root: null, // relative to the viewport
    threshold: 0.15, // 15% of the item must be visible
    rootMargin: "0px"
};

const sectionObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    sectionObserver.observe(section);
});
