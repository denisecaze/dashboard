var btnLogin = document.querySelector(".btn-login");
btnLogin.addEventListener("click", login);

function login(event) {
  event.preventDefault();
  var username = document.querySelector(".username").value.toLowerCase();
  var password = document.querySelector(".password").value.toLowerCase();

  if (username === "daniel" && password === "pikachu"){
    window.location.href='dashboard.html';
  } else if (username === "juliana" && password === "gatinhos"){
    window.location.href='dashboard.html';
  } else if (username === "rafael" && password === "peixinho"){
    window.location.href='dashboard.html';
  } else if (username === "samanta" && password === "emocional"){
    window.location.href='dashboard.html';
  } else if (username === "vanessa" && password === "calendariomaia"){
    window.location.href='dashboard.html';
  } else {
    alert("Senha ou usuário inválido.");
  }
}
