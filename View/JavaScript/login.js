document.getElementById("loginForm").addEventListener("submit", (ev) => {
    ev.preventDefault();

    const loginInput = document.getElementById("login").value;
    const passwordInput = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem("users")) || [];
    const registereduser = usuarios.find(user => user.login === loginInput && user.password === passwordInput);

    if (!registereduser) {
        alert("Dados inválidos!");
        return;
    }

    window.location.href = "./notas.html";
});
