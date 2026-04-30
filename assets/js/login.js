const email = "admin@email.com";
const senha = "1234";

function verificarCredenciais() {
    const emailInformado = document.getElementById("email") .value;
    const senhaInformado = document.getElementById("senha") .value;
}

if (emailInformado === email) {
    alert("E-mail correto");
    if (senhaInformado === senha) {
        alert("Senha correta")
        window.location = "home.html";
    } else alert ("Senha errada");
} else alert ("E-mail errado");
