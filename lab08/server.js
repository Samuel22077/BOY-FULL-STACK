const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let usuarioSalvo = {
    usuario: "",
    senha: ""
};

// Página principal
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'projects.html'));

});

// Cadastro
app.get("/cadastra", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Cadastro.html"));
});

app.post("/cadastra", (req, res) => {
    usuarioSalvo.usuario = req.body.usuario;
    usuarioSalvo.senha = req.body.senha;

    res.render("resposta", {
    status: "Usuário cadastrado com sucesso!",
    sucesso: true
    });
});

// Login
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Login.html"));
});

app.post("/login", (req, res) => {
    const usuario = req.body.usuario;
    const senha = req.body.senha;

    let status;

    if (
        usuario === usuarioSalvo.usuario &&
        senha === usuarioSalvo.senha
    ) {
        status = "Login realizado com sucesso!";
    } else {
        status = "Usuário ou senha incorretos!";
    }

    res.render("resposta", {
    status,
    sucesso: status === "Login realizado com sucesso!"
    });
});

// Porta 80
app.listen(80, () => {
    console.log("Servidor rodando na porta 80");
});