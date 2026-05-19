function verificar() {
  let numeroAleatorio = Math.random();
  let numeroGerado = Math.floor(numeroAleatorio * 10);

  console.log("Número gerado pelo sistema:", numeroGerado); // <-- linha nova

  let entrada = document.getElementById("entrada").value;

  if (entrada > numeroGerado) {
    document.getElementById("resultado").innerHTML = "Seu número é MAIOR";
    document.getElementById("container").style.setProperty("background-color", "red");
  }
  else if (entrada < numeroGerado) {
    document.getElementById("resultado").innerHTML = "Seu número é MENOR";
    document.getElementById("container").style.setProperty("background-color", "red");
  }
  else {
    document.getElementById("resultado").innerHTML = "Você ACERTOU!";
    document.getElementById("container").style.setProperty("background-color", "green");
  }
}