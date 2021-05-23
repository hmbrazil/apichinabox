const express = require('express');
const Produto = require('../models/produto');

const routes = express.Router();
const qtdElementosPagina = 2;

routes.get('/', async (req, res, next) => {
    
    const { pagina } = req.query;
    const elementosPulados = (pagina -1) * qtdElementosPagina;
    
    try {
        const doc = await Produto.find({ })
            .sort({ 
                nome: 1,
            })
            .skip(elementosPulados)
            .limit(qtdElementosPagina)
            .select("_id nome preco descricao");;
        res.send(doc);
    } 
    catch (err) {
        next(err);
    }
});

routes.post('/', (req, res, next) => {
    
    const { nome, preco, descricao, imagem, permiteAlteracao } = req.body;
    const produto = new Produto({
        nome: nome,
        preco: preco,
        descricao: descricao,
        imagem: imagem,
        permiteAlteracao: permiteAlteracao,
    });

    produto
        .save()
        .then((doc) => {
            res.status(201).send({ mensagem: 'objeto adicionada com sucesso!', doc:doc });
        })
        .catch((err) => {
            if (err.code == 11000) {
                const erro = new Error('Esse produto já foi cadastrado.');
                next(erro);
                return;
            }
            next(err);
        });
});

routes.get('/:idProduto', async function(req, res, next) {
    
    const { idProduto } = req.params;
    
    try {
        const doc = await Produto.find({
            _id: idProduto,
        }).select("_id nome");
        res.send(doc);
    } 
    catch (err) {
        next(err);
    }
});
 
routes.patch('/:idProduto', async function (req, res, next) {
    
    const { idProduto } = req.params;
    const { nome, descricao, preco } = req.body;
    const parametrosUpdate = {};

    for (const chave of Object.keys(req.body)) {
        parametrosUpdate[chave] = req.body[chave];
    }

    try {
            const doc = await Produto.updateOne({
                _id: idProduto,
            }, 
            parametrosUpdate,
        );
        res.status(204).send();
    } 
    catch (err) {
        next(err);
    }
});

routes.delete('/:idProduto', async function(req, res, next) {
    
    const { idProduto } = req.params;
    
    try {
        const doc = await Produto.deleteOne({
            _id: idProduto,
        });
        res.status(204).send();
    } 
    catch (err) {
        next(err);
    }
})

module.exports = routes;