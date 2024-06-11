        // JavaScript for additional hover effects and animations

        // Example: Custom hover effect for buttons with class .btn-custom
        const btnCustom = document.querySelectorAll('.btn-custom');
        btnCustom.forEach(btn => {
            btn.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-5px)';
            });
            btn.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0)';
            });
        });

        // Example: Custom hover effect for cards with class .card-custom
        const cardCustom = document.querySelectorAll('.card-custom');
        cardCustom.forEach(card => {
            card.addEventListener('mouseenter', function () {
                const cardImg = this.querySelector('.card-img-top');
                cardImg.style.transform = 'scale(1.1)';
            });
            card.addEventListener('mouseleave', function () {
                const cardImg = this.querySelector('.card-img-top');
                cardImg.style.transform = 'scale(1)';
            });
        });
        
        // JavaScript for triggering animations
        document.addEventListener('DOMContentLoaded', function () {
            const aboutSection = document.querySelector('.about-section');
            const progressSection = document.querySelector('.progress-section');
            const projectsSection = document.querySelector('.projects-section');
            const progressBars = document.querySelectorAll('.progress-bar');

            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            function checkVisibility() {
                if (isElementInViewport(aboutSection)) {
                    aboutSection.classList.add('visible');
                }
                if (isElementInViewport(progressSection)) {
                    progressSection.classList.add('visible');
                    progressBars.forEach(bar => {
                        bar.style.width = bar.getAttribute('aria-valuenow') + '%';
                    });
                }
                if (isElementInViewport(projectsSection)) {
                    projectsSection.classList.add('visible');
                }
            }

            window.addEventListener('scroll', checkVisibility);
            window.addEventListener('resize', checkVisibility);

            checkVisibility();
        });