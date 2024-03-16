const carouselContainers = document.querySelectorAll('.carousel-container');

        carouselContainers.forEach(container => {
            const carousel = container.querySelector('.carousel');
            const prevBtn = container.querySelector('.prev');
            const nextBtn = container.querySelector('.next');
            const descriptions = container.querySelectorAll('.carousel-description p');
            const images = carousel.querySelectorAll('img');
            let currentIndex = 0;

            function updateDescription() {
                descriptions.forEach((description, index) => {
                    description.style.display = index === currentIndex % images.length ? 'block' : 'none';
                });
            }

            function showImage(index) {
                carousel.style.transform = `translateX(-${index * 100}%)`;
                currentIndex = index;
                updateDescription();
            }

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            });

            showImage(currentIndex);
        });