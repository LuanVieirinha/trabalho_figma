document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura o valor do e-mail
    const email = document.getElementById("email").value;

    // Lógica para enviar o e-mail para o servidor ou exibir uma mensagem
    console.log("E-mail enviado:", email); // ou exibir um alerta
    alert("E-mail enviado: " + email);

    // Aqui você pode adicionar a lógica de envio para uma API ou back-end, se necessário

    window.location.pathname = "/index2.html";

});
