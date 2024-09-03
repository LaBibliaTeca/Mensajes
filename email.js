// Incluir la biblioteca de EmailJS
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.emailjs.com/dist/email.min.js';
document.head.appendChild(script);

script.onload = function() {
    // Iniciar EmailJS
    emailjs.init("_vmfJzPaAfLKlio-k"); // Reemplaza "YOUR_PUBLIC_KEY" con tu clave pública

    // Manejar el envío del formulario
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Previene la recarga de la página

        // Enviar el formulario usando EmailJS
        emailjs.sendForm('service_2ajarrr', 'template_biqdvfi', this)
            .then(function() {
                alert('Correo enviado exitosamente!');
            }, function(error) {
                alert('Error al enviar el correo: ' + JSON.stringify(error));
            });
    });
};
