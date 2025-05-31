        
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

        // Services Start
    
         document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.getElementById('carousel');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const dotsContainer = document.getElementById('dotsContainer');
            const items = document.querySelectorAll('.carousel-item');
            
            let currentIndex = 0;
            let autoSlideInterval;
            const itemWidth = items[0].offsetWidth + 32; // width + gap
            const visibleItems = Math.min(3, Math.floor(carousel.offsetWidth / itemWidth));
            
            // Create dots
            items.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.className = 'w-3 h-3 rounded-full bg-gray-300 transition duration-300';
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            });
            
            const dots = dotsContainer.querySelectorAll('button');
            updateDots();
            
            // Auto-slide
            function startAutoSlide() {
                autoSlideInterval = setInterval(() => {
                    nextSlide();
                }, 4000);
            }
            
            function stopAutoSlide() {
                clearInterval(autoSlideInterval);
            }
            
            // Navigation functions
            function nextSlide() {
                currentIndex = (currentIndex + 1) % (items.length - visibleItems + 1);
                updateCarousel();
            }
            
            function prevSlide() {
                currentIndex = (currentIndex - 1 + (items.length - visibleItems + 1)) % (items.length - visibleItems + 1);
                updateCarousel();
            }
            
            function goToSlide(index) {
                currentIndex = index;
                updateCarousel();
            }
            
            function updateCarousel() {
                const scrollPosition = currentIndex * itemWidth;
                carousel.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
                updateDots();
            }
            
            function updateDots() {
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active-dot');
                        dot.classList.remove('bg-gray-300');
                    } else {
                        dot.classList.remove('active-dot');
                        dot.classList.add('bg-gray-300');
                    }
                });
            }
            
            // Event listeners
            prevBtn.addEventListener('click', () => {
                prevSlide();
                stopAutoSlide();
                startAutoSlide();
            });
            
            nextBtn.addEventListener('click', () => {
                nextSlide();
                stopAutoSlide();
                startAutoSlide();
            });
            
            carousel.addEventListener('mouseenter', stopAutoSlide);
            carousel.addEventListener('mouseleave', startAutoSlide);
            
            // Handle window resize
            window.addEventListener('resize', () => {
                const newVisibleItems = Math.min(3, Math.floor(carousel.offsetWidth / itemWidth));
                if (newVisibleItems !== visibleItems) {
                    currentIndex = 0;
                    updateCarousel();
                }
            });
            
            // Initialize
            startAutoSlide();
        });

        // See More button

        // Toggle description function
    function toggleDescription(idPrefix) {
        const shortDesc = document.getElementById(`${idPrefix}-short`);
        const fullDesc = document.getElementById(`${idPrefix}-full`);
        
        if (shortDesc.classList.contains('hidden')) {
            shortDesc.classList.remove('hidden');
            fullDesc.classList.add('hidden');
        } else {
            shortDesc.classList.add('hidden');
            fullDesc.classList.remove('hidden');
        }
    }

        
        // Services End 

         // Calculator Functionality
  document.addEventListener('DOMContentLoaded', function() {
    const billBtn = document.getElementById('billBtn');
    const usageBtn = document.getElementById('usageBtn');
    const billForm = document.getElementById('billForm');
    const usageForm = document.getElementById('usageForm');
    const calculateBtn = document.getElementById('calculateBtn');
    const results = document.getElementById('results');
    const resetBtn = document.getElementById('resetBtn');

    // Toggle between bill and usage forms
    billBtn.addEventListener('click', function() {
      billBtn.classList.add('bg-yellow-500', 'text-white');
      billBtn.classList.remove('bg-gray-200', 'text-gray-700');
      usageBtn.classList.add('bg-gray-200', 'text-gray-700');
      usageBtn.classList.remove('bg-yellow-500', 'text-white');
      billForm.classList.remove('hidden');
      usageForm.classList.add('hidden');
    });

    usageBtn.addEventListener('click', function() {
      usageBtn.classList.add('bg-yellow-500', 'text-white');
      usageBtn.classList.remove('bg-gray-200', 'text-gray-700');
      billBtn.classList.add('bg-gray-200', 'text-gray-700');
      billBtn.classList.remove('bg-yellow-500', 'text-white');
      usageForm.classList.remove('hidden');
      billForm.classList.add('hidden');
    });

    // Calculate savings
    calculateBtn.addEventListener('click', function() {
      const roofType = document.getElementById('roofType').value;
      let systemSize, systemCost, annualSavings;

      if (!billForm.classList.contains('hidden')) {
        const monthlyBill = parseFloat(document.getElementById('monthlyBill').value);
        if (!monthlyBill || monthlyBill <= 0) {
          alert('Please enter a valid monthly bill amount');
          return;
        }
        // Simplified calculation (real-world would be more complex)
        systemSize = Math.round(monthlyBill / 10) + ' kW';
        systemCost = '$' + Math.round(monthlyBill * 800);
        annualSavings = '$' + Math.round(monthlyBill * 12 * 0.8);
      } else {
        const monthlyUsage = parseFloat(document.getElementById('monthlyUsage').value);
        if (!monthlyUsage || monthlyUsage <= 0) {
          alert('Please enter a valid monthly energy usage');
          return;
        }
        // Simplified calculation
        systemSize = Math.round(monthlyUsage / 100) + ' kW';
        systemCost = '$' + Math.round(monthlyUsage * 3.5 * 1000);
        annualSavings = '$' + Math.round(monthlyUsage * 12 * 0.12);
      }

      // Determine recommended package
      let recommendedPackage;
      const size = parseFloat(systemSize);
      if (size <= 5) {
        recommendedPackage = "Starter Package (5kW) - Perfect for small homes";
      } else if (size <= 10) {
        recommendedPackage = "Family Package (10kW) - Ideal for medium households";
      } else {
        recommendedPackage = "Premium Package (15kW+) - Best for large homes/businesses";
      }

      // Update results
      document.getElementById('systemSize').textContent = systemSize;
      document.getElementById('systemCost').textContent = systemCost;
      document.getElementById('annualSavings').textContent = annualSavings;
      document.getElementById('recommendedPackage').textContent = recommendedPackage;
      document.getElementById('paybackPeriod').textContent = "5-7 years (estimated)";

      // Show results
      results.classList.remove('hidden');
    });

    // Reset calculator
    resetBtn.addEventListener('click', function() {
      document.getElementById('monthlyBill').value = '';
      document.getElementById('monthlyUsage').value = '';
      results.classList.add('hidden');
      billBtn.click(); // Reset to bill form
    });
  });


  // FAQ Accordion Functionality
  document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('.faq-icon');
        
        // Toggle answer visibility
        answer.classList.toggle('hidden');
        
        // Toggle icon rotation
        icon.classList.toggle('rotate-180');
        
        // Close other open answers
        faqQuestions.forEach(otherQuestion => {
          if (otherQuestion !== question) {
            otherQuestion.nextElementSibling.classList.add('hidden');
            otherQuestion.querySelector('.faq-icon').classList.remove('rotate-180');
          }
        });
      });
    });
  });


//   Testmonial Cards 

  // const wrapper = document.getElementById('testimonial-wrapper');
  // let currentSlide = 0;

  // const nextTestimonial = () => {
  //   currentSlide = (currentSlide + 1) % 3;
  //   wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  // };

  // const prevTestimonial = () => {
  //   currentSlide = (currentSlide - 1 + 3) % 3;
  //   wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  // };

  // // Auto-slide every 5 seconds
  // setInterval(nextTestimonial, 5000);


  document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.getElementById('testimonial-wrapper');
  const testimonials = document.querySelectorAll('#testimonial-wrapper > div');
  let currentSlide = 0;
  let autoSlideInterval;
  const totalSlides = testimonials.length;
  const slidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  // Initialize carousel
  function initCarousel() {
    updateCarousel();
    startAutoSlide();
    
    // Pause on hover
    wrapper.addEventListener('mouseenter', stopAutoSlide);
    wrapper.addEventListener('mouseleave', startAutoSlide);
    
    // Handle window resize
    window.addEventListener('resize', function() {
      updateCarousel();
    });
  }

  function updateCarousel() {
    const slideWidth = 100 / slidesToShow;
    const translateValue = -currentSlide * slideWidth;
    wrapper.style.transform = `translateX(${translateValue}%)`;
  }

  function nextTestimonial() {
    if (currentSlide < totalSlides - slidesToShow) {
      currentSlide++;
    } else {
      currentSlide = 0; // Loop back to start
    }
    updateCarousel();
    resetAutoSlide();
  }

  function prevTestimonial() {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = totalSlides - slidesToShow; // Loop to end
    }
    updateCarousel();
    resetAutoSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextTestimonial, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  // Make functions available globally
  window.nextTestimonial = nextTestimonial;
  window.prevTestimonial = prevTestimonial;

  // Initialize
  initCarousel();
});


  
