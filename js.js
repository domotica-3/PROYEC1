window.addEventListener("scroll", () => {
    const estadoArteSection = document.querySelector(".container-vertical");
    const distanceFromTop = estadoArteSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (distanceFromTop - screenHeight < 0) {
        estadoArteSection.classList.add("visible");
    } else {
        estadoArteSection.classList.remove("visible");
    }
});

// Función para el desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});
