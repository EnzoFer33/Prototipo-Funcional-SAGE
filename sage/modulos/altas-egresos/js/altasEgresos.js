document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const btnVerInformes = document.querySelectorAll('.btn-ver-informe');
    const btnCerrarInformes = document.querySelectorAll('.btn-cerrar-informe');
    const seccionInforme = document.getElementById('seccion-informe');
    const tablaEgresos = document.getElementById('tabla-egresos');

    // 1. Lógica para desplegar el Informe Oculto desde la tabla
    if (btnVerInformes.length > 0 && seccionInforme) {
        btnVerInformes.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Mostrar la sección
                seccionInforme.style.display = 'block';
                
                // Realizar scroll suave para focalizar el informe
                seccionInforme.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    // 2. Lógica para cerrar el Informe Oculto
    if (btnCerrarInformes.length > 0 && seccionInforme) {
        btnCerrarInformes.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Ocultar la sección
                seccionInforme.style.display = 'none';
                
                // Devolver el scroll hacia la tabla
                if (tablaEgresos) {
                    tablaEgresos.scrollIntoView({ behavior: 'smooth', block: 'end' });
                }
            });
        });
    }
});