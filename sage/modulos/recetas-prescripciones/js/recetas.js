document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LÓGICA DE LA SECCIÓN DE EDICIÓN
    // ==========================================
    
    const btnEditarRecetas = document.querySelectorAll('.btn-editar-receta');
    const seccionEdicion = document.getElementById('seccion-edicion');
    const btnCerrarForms = document.querySelectorAll('.btn-cerrar-form');
    const tablaRecetas = document.getElementById('tabla-recetas');
    
    // Abrir la sección de edición y hacer scroll suave
    if (btnEditarRecetas.length > 0 && seccionEdicion) {
        btnEditarRecetas.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                seccionEdicion.style.display = 'block';
                seccionEdicion.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    // Cerrar la sección de edición desde los botones de acción (Guardar, Firmar, Cancelar)
    if (btnCerrarForms.length > 0 && seccionEdicion) {
        btnCerrarForms.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                seccionEdicion.style.display = 'none';
                
                // Volver a enfocar la tabla al cerrar la edición
                if(tablaRecetas) {
                    tablaRecetas.scrollIntoView({ behavior: 'smooth', block: 'end' });
                }
            });
        });
    }

    // ==========================================
    // 2. LÓGICA DEL MODAL "VER RECETA"
    // ==========================================
    
    const btnVerRecetas = document.querySelectorAll('.btn-ver-receta');
    const modalVerReceta = document.getElementById('modal-ver-receta');
    const btnCerrarModalReceta = document.getElementById('btn-cerrar-modal-receta');

    // Función para cerrar el modal
    function cerrarModalReceta(e) {
        if(e) e.preventDefault();
        modalVerReceta.style.display = 'none';
    }

    // Abrir el modal al hacer clic en "Ver receta"
    if (btnVerRecetas.length > 0 && modalVerReceta) {
        btnVerRecetas.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modalVerReceta.style.display = 'flex';
            });
        });
    }

    // Cerrar con el botón de la cruz (X)
    if (btnCerrarModalReceta) {
        btnCerrarModalReceta.addEventListener('click', cerrarModalReceta);
    }

    // Cerrar al hacer clic fuera de la tarjeta blanca (en el fondo oscurecido)
    if (modalVerReceta) {
        modalVerReceta.addEventListener('click', (e) => {
            if (e.target === modalVerReceta) {
                cerrarModalReceta();
            }
        });
    }

    // ==========================================
    // 3. LÓGICA DE ALTA DE NUEVA PRESCRIPCIÓN
    // ==========================================
    const btnContinuarPaso2 = document.getElementById('btn-continuar-paso-2');
    const paso1 = document.getElementById('paso-1');
    const paso2 = document.getElementById('paso-2');
    const headerDesc = document.getElementById('header-desc');
    const step1Indicator = document.getElementById('indicator-step-1');
    const step2Indicator = document.getElementById('indicator-step-2');

    // Transición Paso 1 -> Paso 2
    if (btnContinuarPaso2 && paso1 && paso2) {
        btnContinuarPaso2.addEventListener('click', (e) => {
            e.preventDefault();
            paso1.style.display = 'none';
            paso2.style.display = 'block';
            
            // Actualizar Textos y Estado
            headerDesc.textContent = 'Completá los medicamentos y revisá los requisitos antes de firmar una nueva prescripción.';
            step1Indicator.classList.remove('active');
            step1Indicator.classList.add('text-muted');
            step2Indicator.classList.remove('text-muted');
            step2Indicator.classList.add('active');
            
            // Scroll arriba
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Lógica del Checkbox de Alergias
    const chkAlergias = document.getElementById('chk-alergias');
    const btnFirmarFinal = document.getElementById('btn-firmar-final');
    const alergiaStatusBadge = document.getElementById('alergia-status-badge');

    if (chkAlergias && btnFirmarFinal && alergiaStatusBadge) {
        chkAlergias.addEventListener('change', (e) => {
            if (e.target.checked) {
                // Habilitar botón de firmar
                btnFirmarFinal.disabled = false;
                btnFirmarFinal.style.opacity = '1';
                
                // Cambiar estado del badge de alergia a Verde/Verificado
                alergiaStatusBadge.style.backgroundColor = '#e8f5e9';
                alergiaStatusBadge.style.borderColor = 'var(--color-green)';
                alergiaStatusBadge.style.color = 'var(--color-green)';
                alergiaStatusBadge.innerHTML = '<span class="check-icon">✓</span> Revisión de alergias completada';
            } else {
                // Deshabilitar botón
                btnFirmarFinal.disabled = true;
                btnFirmarFinal.style.opacity = '0.5';
                
                // Volver badge a estado Amarillo/Pendiente
                alergiaStatusBadge.style.backgroundColor = '#fffde7';
                alergiaStatusBadge.style.borderColor = '#fbc02d';
                alergiaStatusBadge.style.color = '#f57f17';
                alergiaStatusBadge.textContent = 'Revisión de alergias pendiente';
            }
        });
    }

});