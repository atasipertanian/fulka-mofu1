let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dots span');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
    
        // Tampilkan slide berdasarkan indeks
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
                dots[i].classList.toggle('active', i === index);
            });
        }
    
        // Navigasi slide berikutnya
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
    
        // Navigasi slide sebelumnya
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
    
        // Auto-slide
        let autoSlide = setInterval(nextSlide, 3000); // 3 detik per slide
    
        // Event listener tombol
        prevButton.addEventListener('click', () => {
            clearInterval(autoSlide); // Hentikan auto-slide sementara
            prevSlide();
            autoSlide = setInterval(nextSlide, 3000); // Mulai ulang auto-slide
        });
    
        nextButton.addEventListener('click', () => {
            clearInterval(autoSlide); // Hentikan auto-slide sementara
            nextSlide();
            autoSlide = setInterval(nextSlide, 3000); // Mulai ulang auto-slide
        });
    
        // Event listener indikator bulat
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(autoSlide); // Hentikan auto-slide sementara
                currentSlide = index;
                showSlide(currentSlide);
                autoSlide = setInterval(nextSlide, 3000); // Mulai ulang auto-slide
            });
        });
    
        // Tampilkan slide pertama
        showSlide(currentSlide);