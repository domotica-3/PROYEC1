document.addEventListener('DOMContentLoaded', () => {
    // Search Functionality
    document.querySelector('#searchButton').addEventListener('click', function() {
        const query = document.querySelector('#searchInput').value.toLowerCase();
        const content = document.querySelectorAll('.content p');

        if (query) {
            let found = false;
            content.forEach(paragraph => {
                if (paragraph.textContent.toLowerCase().includes(query)) {
                    paragraph.style.backgroundColor = 'yellow';  // Resaltar el texto encontrado
                    found = true;
                } else {
                    paragraph.style.backgroundColor = '';  // Eliminar resaltado si no coincide
                }
            });

            if (!found) {
                alert('No se encontraron resultados.');
            }
        } else {
            alert('Por favor ingrese una palabra clave para buscar.');
        }
    });

    // Dropdown Toggle
    document.querySelector('.dropdown').addEventListener('mouseover', function() {
        this.querySelector('.dropdown-content').style.display = 'flex';
    });

    document.querySelector('.dropdown').addEventListener('mouseout', function() {
        this.querySelector('.dropdown-content').style.display = 'none';
    });

    // Responsive Navbar Toggle
    document.querySelector('.navbar-toggle').addEventListener('click', function() {
        document.querySelector('.navbar-menu ul').classList.toggle('active');
    });
});

/*new*/let currentSlide = 0;
let currentBlogSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
    });
}

function showBlogSlide(index) {
    const blogItems = document.querySelectorAll('.blog-item');
    const blogContainer = document.querySelector('.blog-carousel');
    if (index >= blogItems.length) {
        currentBlogSlide = 0;
    } else if (index < 0) {
        currentBlogSlide = blogItems.length - 1;
    } else {
        currentBlogSlide = index;
    }
    blogContainer.style.transform = `translateX(${-currentBlogSlide * 300}px)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

function moveBlogSlide(direction) {
    showBlogSlide(currentBlogSlide + direction);
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 3000); // Cambia la imagen cada 3 segundos
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    showBlogSlide(currentBlogSlide);
    startSlideShow();

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', () => {
        moveSlide(-1);
        stopSlideShow();
        startSlideShow();
    });

    nextButton.addEventListener('click', () => {
        moveSlide(1);
        stopSlideShow();
        startSlideShow();
    });
});
let currentBuySlide = 0;

function showBuySlide(index) {
    const buyItems = document.querySelectorAll('.buy-item');
    const buyContainer = document.querySelector('.buy-carousel');
    if (index >= buyItems.length) {
        currentBuySlide = 0;
    } else if (index < 0) {
        currentBuySlide = buyItems.length - 1;
    } else {
        currentBuySlide = index;
    }
    buyContainer.style.transform = `translateX(${-currentBuySlide * 300}px)`;
}

function moveBuySlide(direction) {
    showBuySlide(currentBuySlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showBuySlide(currentBuySlide);

    const prevBuyButton = document.querySelector('.buy-buttons .prev');
    const nextBuyButton = document.querySelector('.buy-buttons .next');

    prevBuyButton.addEventListener('click', () => {
        moveBuySlide(-1);
    });

    nextBuyButton.addEventListener('click', () => {
        moveBuySlide(1);
    });
});
