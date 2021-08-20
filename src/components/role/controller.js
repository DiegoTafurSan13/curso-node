const store = require('./store');
const { message } = require('../../helpers/response');


const controllerGet = async (req, res, next) => {
    const query = req.query.role || null;
    store.get(query)
        .then(data => message(req, res, data));

};

const controllerPost = async (req, res, next) => {
    const data = req.body;
    store.add(data)
        .then(data => message(req, res, data));

};

const controllerPatch = async (req, res, next) => {
    const id = req.params.id;
    const rol = req.body;
    store.patch(id, rol)
        .then(data => message(req, res, data));
}

const controllerDelete = async (req, res, next) => {
    const id = req.params.id;
    store.delete(id)
        .then(data => message(req, res, data));
}

module.exports = {
    controllerGet,
    controllerPost,
    controllerPatch,
    controllerDelete
}