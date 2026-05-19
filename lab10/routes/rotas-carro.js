const express = require('express');
const router  = express.Router();
const { criarCarro, listarCarros, buscarPorId, atualizarCarro, removerCarro, venderCarro } = require('../models/Carro');

function verificarLogin(req, res, next) {
    if (!req.session.usuario) return res.redirect('/usuario/login');
    next();
}

router.get('/lista', async (req, res) => {
    const carros      = await listarCarros();
    const usuarioNome = req.session.usuario ? req.session.usuario.nome : null;
    res.render('lista-carros', { carros, usuario: req.session.usuario || null, usuarioNome });
});

router.get('/gerencia', verificarLogin, async (req, res) => {
    const carros      = await listarCarros();
    const usuarioNome = req.session.usuario.nome;
    res.render('gerencia-carros', { carros, usuarioNome, erro: null, sucesso: null, editando: null });
});

router.get('/cadastrar', verificarLogin, (req, res) => {
    const usuarioNome = req.session.usuario.nome;
    res.render('cadastrar-carro', { usuarioNome, erro: null });
});

router.post('/cadastrar', verificarLogin, async (req, res) => {
    const { marca, modelo, ano, quantidade_disponivel } = req.body;
    try {
        await criarCarro({ marca, modelo, ano, quantidade_disponivel });
        res.redirect('/carros/gerencia?sucesso=cadastro');
    } catch (err) {
        const usuarioNome = req.session.usuario.nome;
        res.render('cadastrar-carro', { usuarioNome, erro: err.message });
    }
});

router.get('/atualizar/:id', verificarLogin, async (req, res) => {
    const carro       = await buscarPorId(req.params.id);
    const usuarioNome = req.session.usuario.nome;
    res.render('atualizar-carro', { carro, usuarioNome, erro: null });
});

router.post('/atualizar/:id', verificarLogin, async (req, res) => {
    const { marca, modelo, ano, quantidade_disponivel } = req.body;
    try {
        await atualizarCarro(req.params.id, { marca, modelo, ano, quantidade_disponivel });
        res.redirect('/carros/gerencia?sucesso=atualizacao');
    } catch (err) {
        const carro       = await buscarPorId(req.params.id);
        const usuarioNome = req.session.usuario.nome;
        res.render('atualizar-carro', { carro, usuarioNome, erro: err.message });
    }
});

router.get('/remover/:id', verificarLogin, async (req, res) => {
    await removerCarro(req.params.id);
    res.redirect('/carros/gerencia?sucesso=remocao');
});

router.post('/vender/:id', verificarLogin, async (req, res) => {
    try {
        await venderCarro(req.params.id);
    } catch (err) {}
    res.redirect('/carros/lista');
});

module.exports = router;