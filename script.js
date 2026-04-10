function enviarDados() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
 
    // Validação
    if (nome === "" || telefone === "" || email === "") {
        alert("Preencha todos os campos!");
        return;
    }
 
    // Mensagem de confirmação
    document.getElementById("mensagem").innerHTML = "Dados recebidos com sucesso!";
 
    // Mostrar dados
    document.getElementById("resultado").innerHTML =
        "<p><strong>Nome:</strong> " + nome + "</p>" +
        "<p><strong>Telefone:</strong> " + telefone + "</p>" +
        "<p><strong>E-mail:</strong> " + email + "</p>";
 
    // Limpar campos
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
}
