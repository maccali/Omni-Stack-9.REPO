const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-7cefl.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// GET, POST, PUT, DELETE

// req.query = Acessar query params (pata Filtros)
// req.params = Acessar route params (pata Edição, Delete)
// req.body = Acessar corpo da requisição (para Criação, Edição de registros)

app.use(express.json());
app.use(routes);


app.listen(3333);