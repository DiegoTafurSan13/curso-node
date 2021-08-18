
const Model = require('./model');


async function getRol() {
    try {
        const findRol = await Model.find();
        return findRol;
    } catch (err) {
        throw new Error(err);
    }
};

async function addRol(data) {
    try {
        const newRol = {
            role:data.role.toUpperCase()
        }
        const rol = new Model(newRol);
        return await rol.save();

    } catch (err) {

        throw new Error(err);
    }
};

module.exports = {
    get: getRol,
    add: addRol
};