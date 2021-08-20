const { request } = require('express');

const store = require('./store');
const { message } = require('../../helpers/response');
const { verifiedEmail } = require('../../helpers/db_validate');

const controllerGet = async (req = request, res, next) => {
    const email = req.query.email || null;
    const query = req.query;
    store.get(email,query)
        .then(data => message(req, res, data));

}
const controllerPost = async (req = request, res, next) => {
    const user = req.body;
    const email_verified = await verifiedEmail(user['email']);
    if (email_verified) {
        message(req, res, email_verified);
    } else {
        store.add(user)
            .then(data => message(req, res, data));
    }
}

const controllerPatch = async (req = request, res, next) => {
    const id = req.params.id;
    const user = req.body;
    store.patch(id, user)
        .then(data => message(req, res, data));

}

const controllerDelete = async (req = request, res, next) => {
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