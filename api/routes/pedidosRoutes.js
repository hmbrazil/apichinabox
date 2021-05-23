const express = require('express');
const Pedido = require('../models/pedido');
const routes = express.Router();


routes.get('/', (req, res) => {
     
    Pedido.find()
        .populate('lista.idProduto')
        .then((doc) => {
            console.log(doc);
            res.send(doc);
        })
        .catch ((err) => {
            console.log(err);
            next(err);
        });
});

routes.post('/', async (req, res, next) => {
    
    const { nomeUsuario, lista } = req.body;
    
    try {
        const pedido = new Pedido({
            nomeUsuario: nomeUsuario,
            lista: lista,
        });
        const doc = await pedido.save();
        res.status(204).send({ });
    } 
    catch (err) {
        next(err);
    }    
});

routes.get('/:idPedido', async function(req, res, next) {
    
    const { idPedido } = req.params;

    try {
        const doc = await Pedido.find({
            _id: idPedido,
        });
        res.send(doc);
    } 
    catch (err) {
        next(err);
    }
});

routes.delete('/:idPedido', async function(req, res, next) {
    
    const { idPedido } = req.params;
    
    try {
        const doc = await Pedido.deleteOne({
            _id: idPedido,
        });
        res.status(204).send();
    } 
    catch (err) {
        next(err);
    }
})

module.exports = routes;