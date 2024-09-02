let email = document.getElementById('email');
let senha = document.getElementById('password');
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

//fazer: enviar dados para a database para efetuar autetenticação
function checar_credenciais(username, password) {
    if (username in usuarios && password===usuarios[username]['senha']) {
        return true;
    }
    return false;
}

function login() {
    if (checar_credenciais(email.value, senha.value)) {
        alert('login efetuado com sucesso');
        localStorage.setItem("sessao", JSON.stringify(usuarios[email.value]));
        document.location.replace("./landing.html");
    } else {
        alert('nome ou senha errados.');
    }
}