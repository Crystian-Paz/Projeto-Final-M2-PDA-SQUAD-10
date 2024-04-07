//Registro
const $ = (elemento) => document.querySelector(elemento);
$("#register").addEventListener("click", (ev) => {
    ev.preventDefault();
  const name = $("#name_cad").value;
  const email = $("#email_cad").value;
  const password = $("#password_cad").value;
  const confirmationpassword = $("#confirmation_Password").value;
  const confirmedpassword = password === confirmation-password;
  if (!confirmed-password) {
      alert("Sua confirmação de senha não confere.\nPor favor verifique.");
      return;
  }

  const allfilled=
      name.length !== 0 &&
      email.length !== 0 &&
      confirmationpassword.length !== 0 &&
      password.length !== 0;
     

  if (allfilled === false) {
      alert("Preencha todos os campos antes de enviar.");
      return;
  }
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const newuser = {
      name,
      email,
      senha,
      confirmaSenha,
  };
  users.push(newuser);
  localStorage.setItem("users", JSON.stringify(users));

  localStorage.setItem('username', name);
  alert("Cadastro realizado com sucesso!");
  window.location.href = "C:\Users\kauan\Projeto-Final-M2-PDA-SQUAD-10\View\HTML\login.Html ";
});

