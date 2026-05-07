import { usuario } from "./bd";


const email = usuario.email;
const senha = usuario.senha;



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

document.addEventListener("DOMContentLoaded", () => {
    const botao =document.querySelector("button");
    botao.addEventListener("click", (e) => {
        e.preventDefault();
        verificarCredenciais();
    });
});


