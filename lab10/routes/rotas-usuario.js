const express = require('express');
const router  = express.Router();
const { criarUsuario, buscarPorLogin } = require('../models/Usuario');

router.get('/cadastro', (req, res) => {
    res.render('cadastro', { erro: null, sucesso: null });
});

router.post('/cadastro', async (req, res) => {
    const { nome, login, senha } = req.body;
    try {
        await criarUsuario({ nome, login, senha });
        res.render('login', { erro: null, sucesso: 'Usuário cadastrado! Faça login.' });
    } catch (err) {
        res.render('cadastro', { erro: err.message, sucesso: null });
    }
});

router.get('/login', (req, res) => {
    res.render('login', { erro: null, sucesso: null });
});

router.post('/login', async (req, res) => {
    const { login, senha } = req.body;
    try {
        const usuario = await buscarPorLogin(login);
        if (!usuario || usuario.senha !== senha) {
            return res.render('login', { erro: 'Login ou senha incorretos', sucesso: null });
        }
        req.session.usuario = { id: usuario._id, nome: usuario.nome, login: usuario.login };
        res.redirect('/carros/lista');
    } catch (err) {
        res.render('login', { erro: 'Erro interno. Tente novamente.', sucesso: null });
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/usuario/login');
});

router.get('/sair', (req, res) => {
    req.session.destroy();
    res.redirect('/usuario/login');
});

module.exports = router;