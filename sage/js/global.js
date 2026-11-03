document.addEventListener('DOMContentLoaded', () => {
    const btnUserMenu = document.getElementById('btn-user-menu');
    const userDropdown = document.getElementById('user-dropdown');

    if (btnUserMenu && userDropdown) {
        // Abrir/cerrar al hacer clic en el nombre
        btnUserMenu.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que el clic cierre el menú inmediatamente
            if (userDropdown.style.display === 'none') {
                userDropdown.style.display = 'block';
            } else {
                userDropdown.style.display = 'none';
            }
        });

        // Cerrar si se hace clic en cualquier otra parte de la pantalla
        document.addEventListener('click', (e) => {
            if (userDropdown.style.display === 'block' && !userDropdown.contains(e.target)) {
                userDropdown.style.display = 'none';
            }
        });
    }
});