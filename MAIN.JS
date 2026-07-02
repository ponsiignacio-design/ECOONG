const botonModo = document.getElementById('btn-modo');
const cuerpoPagina = document.body;


botonModo.addEventListener('click', () => {
 
    cuerpoPagina.classList.toggle('dark-mode');


    if (cuerpoPagina.classList.contains('dark-mode')) {
        botonModo.innerHTML = " Modo Claro";

        botonModo.classList.replace('btn-outline-dark', 'btn-outline-light');
    } else {
        botonModo.innerHTML = "Modo Oscuro";
        botonModo.classList.replace('btn-outline-light', 'btn-outline-dark');
    }
});