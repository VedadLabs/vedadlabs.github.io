document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('header nav a');

    const activateLink = (id) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            }
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activateLink(entry.target.id);
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' }); // Adjust rootMargin to trigger when the section is more centered

    sections.forEach(section => {
        observer.observe(section);
    });
});