const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 80;

const usuarioCorreto = "admin";
const senhaCorreta = "123";

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ROTA HOME
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Projects.html"));
});

// ROTA LOGIN
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Login.html"));
});

// ROTA CADASTRO
app.get("/cadastra", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Cadastro.html"));
});

// RECEBE O LOGIN
app.post("/login", (req, res) => {

    const usuario = req.body.usuario;
    const senha = req.body.senha;

    let status;

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        status = "Login realizado com sucesso!";
    } else {
        status = "Usuário ou senha incorretos!";
    }

    res.render("resposta", {
        resposta: status
    });

});

// SERVIDOR
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});