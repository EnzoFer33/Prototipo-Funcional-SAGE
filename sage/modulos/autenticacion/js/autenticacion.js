document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            // Evitamos que el formulario recargue la página
            e.preventDefault(); 

            // Obtenemos el valor del input y lo pasamos a minúsculas
            const username = usernameInput.value.trim().toLowerCase();

            // Lógica de redirección basada en el usuario
            if (username === 'doctor') {
                window.location.href = '../../demanda-espontanea/html/demanda.html';
            } else if (username === 'admin') {
                window.location.href = '../../personal/html/personal.html';
            } else {
                // Alerta en caso de ingresar un usuario no contemplado en el prototipo
                alert('Usuario incorrecto. Para esta demostración, utiliza "doctor" o "admin".');
            }
        });
    }
});