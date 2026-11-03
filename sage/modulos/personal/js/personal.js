document.addEventListener('DOMContentLoaded', () => {
    // Referencias al DOM
    const botonesVerFicha = document.querySelectorAll('.btn-ver-ficha');
    const botonesCerrarFicha = document.querySelectorAll('.btn-cerrar-ficha');
    const seccionFicha = document.getElementById('seccion-ficha');

    // Mostrar ficha
    if (botonesVerFicha.length > 0 && seccionFicha) {
        botonesVerFicha.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                seccionFicha.style.display = 'block';
                seccionFicha.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    // Cerrar ficha y volver arriba
    if (botonesCerrarFicha.length > 0 && seccionFicha) {
        botonesCerrarFicha.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                seccionFicha.style.display = 'none';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }
});