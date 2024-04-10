document.getElementById("loginForm").addEventListener("submit", (ev) => {
    ev.preventDefault();

    const loginInput = document.getElementById("name-cad").value;
    const passwordInput = document.getElementById("password-cad").value;

    const user = JSON.parse(localStorage.getItem("users")) || [];
    const registereduser = user.find(user => user.login === loginInput && user.password === passwordInput);

    if (!registereduser) {
        alert("Dados inválidos!");
        return;
    }

    window.location.href = "../View/HTML/registered.html";
});
