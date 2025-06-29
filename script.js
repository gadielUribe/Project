// script.js
const heartButton = document.getElementById('heart-button');
const messageContainer = document.getElementById('message-container');

// Array de mensajes bonitos
const messages = [
    "Siempre serás mi Queli.",
    "2 hijos con todo, por favor.",
    "Quiero pasar mi vida a tu lado.",
    "Tu sonrisa ilumina mi día.",
    "Eres increíble.",
    "Te quiero mucho.",
    "Gracias por ser tú.",
    "Eres mi luz.",
    "Nunca te dejaré de amar.",
    "Eres mi todo.",
    "Mi amorcito lindo.",
    "Mi futura esposa."
];

let currentIndex = 0;

// Función para mostrar un mensaje en una posición aleatoria
function showMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.textContent = message;

    // Usamos el tamaño total de la ventana
    const buffer = 60;
    const msgWidth = 200; // Ancho promedio del mensaje (puedes calcularlo dinámicamente si quieres)
    const msgHeight = 40;

    const maxWidth = window.innerWidth - buffer - msgWidth;
    const maxHeight = window.innerHeight - buffer - msgHeight;

    const randomLeft = Math.random() * maxWidth;
    const randomTop = Math.random() * maxHeight;

    messageElement.style.left = `${randomLeft}px`;
    messageElement.style.top = `${randomTop}px`;

    document.body.appendChild(messageElement);

    setTimeout(() => {
        messageElement.remove();
    }, 5000);
}

// Evento de clic en el corazón
heartButton.addEventListener('click', () => {
    showMessage(messages[currentIndex]);

    // Incrementar el índice del mensaje
    currentIndex = (currentIndex + 1) % messages.length;
});

