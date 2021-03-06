const mongoose = require('mongoose');

var produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    preco: {
        type: Number,
        required:true,
    },
    descricao: String,
    imagem: String,
    permiteAlteracao: {
        type: Boolean,
        // required: true,
        default: true,
    },
});

//Export the model
module.exports = mongoose.model('produtos', produtoSchema);