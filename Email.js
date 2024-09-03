// Incluir EmailJS SDK
(function() {
    emailjs.init("Dskmm59c47cnfcmWd"); // Reemplaza "YOUR_PUBLIC_KEY" con tu clave pública
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Previene la recarga de la página

    // Enviar el formulario usando EmailJS
    emailjs.sendForm('service_2ajarrr', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Correo enviado exitosamente!');
        }, function(error) {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
});

