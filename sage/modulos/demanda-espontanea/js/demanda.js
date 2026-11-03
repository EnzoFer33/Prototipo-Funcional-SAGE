document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Capturamos los botones y el contenedor
    const btnRepetir = document.getElementById('btn-repetir');
    const btnCancelar = document.getElementById('btn-cancelar');
    const btnLlamar = document.getElementById('btn-llamar');
    const toastContainer = document.getElementById('toast-container');

    // 2. Función principal para crear y mostrar la alerta
    function showToast(message, type) {
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

        // 3. Autodestrucción después de 3 segundos
        setTimeout(() => {
            toast.classList.add('hiding'); // Dispara la animación de salida
            // Escuchar cuando termina la animación para remover del DOM
            toast.addEventListener('animationend', () => {
                toast.remove();
            });
        }, 3000);
    }

    // 4. Asignar los eventos a los botones correspondientes
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

    if(btnCancelar) {
        btnCancelar.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('Llamado cancelado', 'error');
        });
    }
});