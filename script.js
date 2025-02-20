
document.getElementById('theme-toggle').addEventListener('change', (e) => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    updateParticles();
    e.preventDefault();
});


window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('theme-toggle').checked = true;
    }
    initParticles();
    VanillaTilt.init(document.querySelector('.card'), {
        max: 5,
        speed: 400,
        glare: true,
        'max-glare': 0.08,
        touch: true
    });
    VanillaTilt.init(document.querySelector('.parallax-text'), {
        max: 3,
        speed: 400,
        perspective: 500,
        touch: true
    });
    startCursorAnimation();
});


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const offset = 80;
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
    link.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offset = 80;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});


const facts = [
    "My favorite book is The Alchemist.",
    "I can listen to Radiohead for hours and never get bored.",
    "I love Indian food, especially Biryani.",
    "I’ve spent way too much time in aim trainers, but it was worth it.",
    "My favourite show is The Office."
];

document.getElementById('fact-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const factText = document.getElementById('fact-text');
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factText.textContent = randomFact;
    factText.style.opacity = 0;
    factText.style.transform = 'translateY(10px)';
    requestAnimationFrame(() => {
        factText.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        factText.style.opacity = 1;
        factText.style.transform = 'translateY(0)';
    });
});

document.getElementById('fact-btn').addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const factText = document.getElementById('fact-text');
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factText.textContent = randomFact;
        factText.style.opacity = 0;
        factText.style.transform = 'translateY(10px)';
        requestAnimationFrame(() => {
            factText.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
            factText.style.opacity = 1;
            factText.style.transform = 'translateY(0)';
        });
    }
});


const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0;

function startCursorAnimation() {
    function animateCursor(timestamp) {
        const ease = 0.1;
        const currentX = parseFloat(cursor.style.left) || 0;
        const currentY = parseFloat(cursor.style.top) || 0;
        const newX = currentX + (mouseX - currentX) * ease;
        const newY = currentY + (mouseY - currentY) * ease;
        cursor.style.left = `${newX}px`;
        cursor.style.top = `${newY}px`;
        requestAnimationFrame(animateCursor);
    }
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
    } else {
        requestAnimationFrame(animateCursor);
    }
}


function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 15, density: { enable: true, value_area: 400 } },
            color: { value: document.body.classList.contains('dark') ? '#d8b4fe' : '#6d28d9' },
            shape: { type: 'circle' },
            opacity: { value: 0.08, random: true },
            size: { value: 0.8, random: true },
            line_linked: { enable: false },
            move: { enable: true, speed: 0.6, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
            modes: { repulse: { distance: 30, duration: 0.2 } }
        },
        retina_detect: true,
        fps_limit: 144
    });
}

function updateParticles() {
    const color = document.body.classList.contains('dark') ? '#d8b4fe' : '#6d28d9';
    particlesJS('particles-js', {
        particles: {
            number: { value: 15, density: { enable: true, value_area: 400 } },
            color: { value: color },
            shape: { type: 'circle' },
            opacity: { value: 0.08, random: true },
            size: { value: 0.8, random: true },
            line_linked: { enable: false },
            move: { enable: true, speed: 0.6, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
            modes: { repulse: { distance: 30, duration: 0.2 } }
        },
        retina_detect: true,
        fps_limit: 144
    });
}
