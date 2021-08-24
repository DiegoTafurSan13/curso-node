const { request, response } = require('express');
const store = require('./store');
const { message } = require('../../helpers/response');


const controllerLogin = async (req = request, res = response, next) => {

    const { email, password } = req.body;
    store.authenticate(email, password)
        .then(data => message(req, res, data));

}

const controllerGoogle = async (req = request, res = response, next) => {
    const { id_token } = req.body;
    store.authenticateGoole(id_token)
        .then(data => message(req, res, data));
};

module.exports = {
    controllerLogin,
    controllerGoogle
}