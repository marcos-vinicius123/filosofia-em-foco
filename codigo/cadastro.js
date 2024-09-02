let email = document.getElementById('email');
let senha = document.getElementById('password');
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

function cadastro() {
    if (email.value in usuarios) {
      alert("email ja em uso.");
    } else {
        //mais tarde reimplementar usando firebasse
        usuarios[email.value] = {'email': email.value, 'senha': senha.value};
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        localStorage.setItem("sessao", JSON.stringify(usuarios[email.value]));
        alert('usuario criado');
        document.location.replace("./landing.html");
    }
}