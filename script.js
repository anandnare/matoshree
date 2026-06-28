document.addEventListener("DOMContentLoaded", () => {
    
    // --- Mobile Menu Toggle ---
    const menuBtn = document.querySelector("#menu-btn");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuBtn.classList.toggle("fa-times"); // Changes hamburger to cross mark
    });

    window.onscroll = () => {
        navbar.classList.remove("active");
        menuBtn.classList.remove("fa-times");
    };

    // --- Light/Dark Mode Infrastructure ---
    const themeToggle = document.querySelector("#theme-toggle");
    const icon = themeToggle.querySelector("i");
    
    // Check saved theme or fallback to local preference
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener("click", () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === "dark") {
            icon.className = "fa-solid fa-sun";
        } else {
            icon.className = "fa-solid fa-moon";
        }
    }

    // --- Automatic Hero Slider Control ---
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector("#next-slide");
    const prevBtn = document.querySelector("#prev-slide");
    let slideIndex = 0;
    let slideInterval;

    function showSlides(index) {
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;
        
        slides.forEach(slide => slide.classList.remove("active"));
        slides[slideIndex].classList.add("active");
    }

    function nextSlide() {
        slideIndex++;
        showSlides(slideIndex);
    }

    function prevSlide() {
        slideIndex--;
        showSlides(slideIndex);
    }

    // Event Handlers for Slider Controls
    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetSliderTimer();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetSliderTimer();
    });

    // Automatically change slides every 5 seconds
    function startSliderTimer() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetSliderTimer() {
        clearInterval(slideInterval);
        startSliderTimer();
    }

    // Initialize slider execution
    startSliderTimer();

        document.addEventListener("DOMContentLoaded", () => {
            const filterButtons = document.querySelectorAll(".filter-btn");
            const galleryItems = document.querySelectorAll(".gallery-item");

            filterButtons.forEach(button => {
                button.addEventListener("click", () => {
                    // Remove active status from all current triggers
                    filterButtons.forEach(btn => btn.classList.remove("active"));
                    button.classList.add("active");

                    const targetCategory = button.getAttribute("data-target");

                    galleryItems.forEach(item => {
                        const itemCategory = item.getAttribute("data-category");
                        
                        if (targetCategory === "all" || itemCategory === targetCategory) {
                            item.classList.remove("hide");
                        } else {
                            item.classList.add("hide");
                        }
                    });
                });
            });
        });
});