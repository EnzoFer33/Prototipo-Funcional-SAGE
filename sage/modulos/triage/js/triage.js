document.addEventListener('DOMContentLoaded', () => {
    
    // Capturamos los botones y el contenedor
    const btnRepetir = document.getElementById('btn-repetir-triage');
    const btnLlamar = document.getElementById('btn-llamar-triage');
    const btnAusencia = document.getElementById('btn-ausencia-triage');
    const toastContainer = document.getElementById('toast-container');

    // Función principal para crear y mostrar la alerta
    function showToast(message, type) {
        if (!toastContainer) return;

        // Crear el contenedor de la alerta
        const toast = document.createElement('div');
        toast.classList.add('toast', `toast-${type}`);
        
        // Crear el texto
        const textSpan = document.createElement('span');
        textSpan.textContent = message;
        
        // Crear el icono (Check para success, X para error)
        const iconSpan = document.createElement('span');
        iconSpan.classList.add('toast-icon');
        iconSpan.textContent = type === 'success' ? '✓' : '✕';

        // Ensamblar
        toast.appendChild(textSpan);
        toast.appendChild(iconSpan);
        toastContainer.appendChild(toast);

        // Autodestrucción después de 3 segundos
        setTimeout(() => {
            toast.classList.add('hiding'); // Dispara la animación de salida
            // Escuchar cuando termina la animación para remover del DOM
            toast.addEventListener('animationend', () => {
                toast.remove();
            });
        }, 3000);
    }

    // Asignar los eventos a los botones correspondientes
    if(btnRepetir) {
        btnRepetir.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Llamado exitoso', 'success');
        });
    }

    if(btnLlamar) {
        btnLlamar.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Llamado exitoso', 'success');
        });
    }

    if(btnAusencia) {
        btnAusencia.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Ausencia registrada', 'error');
        });
    }

    // --- Lógica del selector de prioridades en Evaluación de Triage ---
    const prioritySelector = document.getElementById('priority-selector');
    
    if (prioritySelector) {
        // Obtenemos todos los radio buttons dentro del selector
        const radioButtons = prioritySelector.querySelectorAll('input[type="radio"][name="prioridad"]');
        
        radioButtons.forEach(radio => {
            radio.addEventListener('change', (e) => {
                // Si este radio button fue seleccionado
                if (e.target.checked) {
                    
                    // 1. Quitar la clase 'selected' a TODOS los labels
                    const allLabels = prioritySelector.querySelectorAll('.priority-option');
                    allLabels.forEach(label => {
                        label.classList.remove('selected');
                    });
                    
                    // 2. Agregar la clase 'selected' SOLAMENTE al label padre del radio button actual
                    const parentLabel = e.target.closest('.priority-option');
                    if (parentLabel) {
                        parentLabel.classList.add('selected');
                    }
                }
            });
        });
    }
});