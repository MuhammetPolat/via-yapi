
// 1. Sticky Navbar: Aşağı kaydırdıkça menü arka planını renklendir
const header = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 2. Scroll Animasyonları (Fade-in efekti)
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15, // Elementin %15'i göründüğünde animasyon başlar
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // Animasyon bir kere çalışsın
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
