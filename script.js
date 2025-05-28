 // Mobile Menu Toggle
        // const mobileMenuButton = document.getElementById('mobile-menu-button');
        // const mobileMenu = document.getElementById('mobile-menu');
        
        // mobileMenuButton.addEventListener('click', () => {
        //     mobileMenu.classList.toggle('hidden');
        // });
        

        // Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = mobileMenuButton.querySelector('svg');

// Store the original hamburger icon HTML
const hamburgerIcon = `
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
`;

const closeIcon = `
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
`;

mobileMenuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden');
    
    // Change icon based on menu state
    if (isOpen) {
        // Menu is now hidden, show hamburger icon
        menuIcon.innerHTML = hamburgerIcon;
    } else {
        // Menu is now visible, show close icon
        menuIcon.innerHTML = closeIcon;
    }
});

        

        
        
        // Image Slider
        const slides = document.querySelectorAll('.slide');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        let current = 0;
        
        // Clear all slides
        function reset() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('current');
            }
        }
        
        // Start slider
        function startSlide() {
            reset();
            slides[0].classList.add('current');
        }
        
        // Show previous
        function slideLeft() {
            reset();
            current--;
            if (current < 0) {
                current = slides.length - 1;
            }
            slides[current].classList.add('current');
        }
        
        // Show next
        function slideRight() {
            reset();
            current++;
            if (current === slides.length) {
                current = 0;
            }
            slides[current].classList.add('current');
        }
        
        // Left arrow click
        prev.addEventListener('click', () => {
            slideLeft();
        });
        
        // Right arrow click
        next.addEventListener('click', () => {
            slideRight();
        });
        
        // Auto slide
        let slideInterval = setInterval(slideRight, 5000);
        
        // Pause on hover
        const slider = document.querySelector('.slider');
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(slideRight, 5000);
        });
        
        startSlide();