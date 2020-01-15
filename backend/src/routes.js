const {Router} = require('express');


const routes = Router();

const DevController = require('./Controllers/DevController')
const SearchController = require('./Controllers/SearchController')

routes.get('/users', (req, res) => {
    return res.json(req.query);
});

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

routes.put('/users/:id', (req, res) => {
    return res.json(req.params);
});

routes.delete('/users', (req, res) => {
    return res.json({nome: 'olá Aream uhuu'});
});

module.exports = routes;