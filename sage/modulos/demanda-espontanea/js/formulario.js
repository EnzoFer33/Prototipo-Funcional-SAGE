document.addEventListener('DOMContentLoaded', () => {
    
    // Capturar botones del sidebar
    const btnAbrirInterconsulta = document.getElementById('btn-abrir-interconsulta');
    const btnAbrirEstudios = document.getElementById('btn-abrir-estudios');
    
    // Capturar botones de cerrar dentro de los formularios
    const btnCerrarInterconsulta = document.getElementById('btn-cerrar-interconsulta');
    const btnCerrarEstudios = document.getElementById('btn-cerrar-estudios');
    
    // Capturar contenedores de los formularios ocultos
    const formInterconsulta = document.getElementById('form-interconsulta');
    const formEstudios = document.getElementById('form-estudios');

    // Función genérica para alternar visibilidad
    function toggleForm(formElement, show) {
        if (show) {
            formElement.style.display = 'block';
            // Scroll suave hacia el formulario recién abierto
            formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            formElement.style.display = 'none';
        }
    }

    // Eventos para Interconsulta
    if (btnAbrirInterconsulta && formInterconsulta) {
        btnAbrirInterconsulta.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForm(formInterconsulta, true);
        });
    }

    if (btnCerrarInterconsulta && formInterconsulta) {
        btnCerrarInterconsulta.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForm(formInterconsulta, false);
        });
    }

    // Eventos para Estudios Complementarios
    if (btnAbrirEstudios && formEstudios) {
        btnAbrirEstudios.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForm(formEstudios, true);
        });
    }

    if (btnCerrarEstudios && formEstudios) {
        btnCerrarEstudios.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForm(formEstudios, false);
        });
    }

    // --- Lógica del Modal de Medicamentos ---
    const btnAgregarMed = document.getElementById('btn-agregar-medicamento');
    const modalMedicamento = document.getElementById('modal-medicamento');
    const btnCancelarMed = document.getElementById('btn-cancelar-med');
    const btnConfirmarMed = document.getElementById('btn-confirmar-med');

    // Abrir modal
    if (btnAgregarMed && modalMedicamento) {
        btnAgregarMed.addEventListener('click', (e) => {
            e.preventDefault();
            modalMedicamento.style.display = 'flex';
        });
    }

    // Función para cerrar modal
    function cerrarModal(e) {
        if(e) e.preventDefault();
        modalMedicamento.style.display = 'none';
    }

    // Cerrar con los botones
    if (btnCancelarMed) btnCancelarMed.addEventListener('click', cerrarModal);
    
    // Al confirmar, cerramos el modal 
    if (btnConfirmarMed) {
        btnConfirmarMed.addEventListener('click', (e) => {
            cerrarModal(e);
        });
    }

    // Cerrar al hacer clic fuera del contenedor (en el fondo gris)
    if (modalMedicamento) {
        modalMedicamento.addEventListener('click', (e) => {
            if (e.target === modalMedicamento) {
                cerrarModal();
            }
        });
    }

}); // <-- Cierre del DOMContentLoaded