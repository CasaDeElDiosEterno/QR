document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    
    const contactInfo = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL:${phone}\nADR:${address}\nEND:VCARD`;
    
    // Limpiar el contenedor del código QR antes de generar uno nuevo
    document.getElementById('qrcode').innerHTML = "";
    
    const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: contactInfo,
        width: 128,
        height: 128
    });
});
