// JavaScript para desplazamiento suave al hacer clic en elementos del menú

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetSection.offsetTop,
            });
        }
    });
});

