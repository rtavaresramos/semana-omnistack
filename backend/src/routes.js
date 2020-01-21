const { Router } = require('express')
const DevController = require('./controller/DevController')
const SearchController = require('./controller/SearchController')

const routes = Router()

// Listar todos os Usuarios cadastrados
routes.get('/devs', DevController.index)

//Cadastrar um novo usuário
routes.post('/devs', DevController.store)

//Buscar Usuário(s) baseado nas technologias
routes.get('/search', SearchController.index)
module.exports = routes


// Método HTTP : GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query Params: reque.query (Filtros, ordenacao, paginacao)
//Route Params: request.params ( Identificar um recurso na alteracao ou remocao )
//Body: request.body (sao dados para a criacao ou alteracao de um registro)


//MongoDB (Nao-relacional)
