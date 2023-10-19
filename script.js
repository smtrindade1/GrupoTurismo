// Obtén una referencia al botón "Log In" y al formulario de registro
const botonLogin = document.getElementById('login-button');
const formularioRegistro = document.getElementById('registro-formulario');
let formularioVisible = false;

// Agrega un evento de clic al botón "Log In"
botonLogin.addEventListener('click', () => {
  // Cambia el estado del formulario (visible/oculto) al hacer clic en el botón "Log In"
  formularioVisible = !formularioVisible;
  
  // Muestra u oculta el formulario de registro según el estado
  formularioRegistro.style.display = formularioVisible ? 'block' : 'none';
});
        