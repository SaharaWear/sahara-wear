const auth = firebase.auth();
const mensaje = document.getElementById("mensaje");

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      mensaje.innerText = "Inicio de sesión exitoso.";
      window.location.href = "index.html";
    })
    .catch((error) => {
      mensaje.innerText = "Error: " + error.message;
    });
}

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      mensaje.innerText = "Registro exitoso.";
    })
    .catch((error) => {
      mensaje.innerText = "Error: " + error.message;
    });
}
