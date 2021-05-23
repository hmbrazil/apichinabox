const express = require('express');
const mongoose = require('mongoose');

const produtosRoutes = require('./api/routes/produtosRoutes');
const pedidosRoutes = require('./api/routes/pedidosRoutes');

const app = express();
const port = process.env.PORT || 3000;
const dbURL = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@cluster0.shwhp.mongodb.net/${process.env.BD_NAME}?retryWrites=true&w=majority`;

mongoose.connect(
    dbURL, 
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,

    }, (err) => {
        if(!err) {
            console.log(`Mongo DB conectou`);
        } else {
            console.log(`Erro Mongo DB ${err}`);
        }
    }
);

app.use(express.json());
app.use('/produto', produtosRoutes);
app.use('/pedido', pedidosRoutes);

// middleware para informação de página não localizada;
app.use((req, res, next) => {
    const erro = new Error('Página não localizada!');
    erro.status = 404;
    next(erro);
});

// middleware para rertorno das mensagens de erro tratadas;
app.use((err, req, res, next) => {
    res.status(500).send({ mensagem: err.message,  erro:err });
});

// inicia escuta na posra especificada;
app.listen(port, () => {
    console.log(`Exemplo de app listening na porta ${port}`)
})