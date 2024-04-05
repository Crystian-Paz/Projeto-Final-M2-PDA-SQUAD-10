document.getElementById("loginForm").addEventListener("submit", (ev) => {
    ev.preventDefault();

    const loginInput = document.getElementById("login").value;
    const senhaInput = document.getElementById("senha").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioCadastrado = usuarios.find(usuario => usuario.login === loginInput && usuario.senha === senhaInput);

    if (!usuarioCadastrado) {
        alert("Dados inválidos!");
        return;
    }

    window.location.href = "./notas.html";
});
