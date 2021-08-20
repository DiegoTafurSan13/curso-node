const Model = require('./models');
const { encryptPassword, matchPassword } = require('../../helpers/hash_password');

async function getUserAll(email, query) {
    try {
        let users = {};
        const { limite = 5, desde = 0 } = query;
        if (email !== null) {
            users = await Model.findOne({
                email,
                state: true
            });
            if (!users) {
                return 'User not found';
            }
            return users;
        }
        /** optimiza mejor el tiempo de respuesta cuando se tiene mas de dos peticiones bloqueantes */
        const [total, foundUser] = await Promise.all([
            Model.countDocuments({ state: true }),
            Model.find({ state: true }).skip(Number(desde)).limit(Number(limite)),
        ]);
        return {
            total,
            foundUser
        };
    } catch (err) {
        return err;
    }
}

async function addUser(user) {
    try {
        const { state, google, ...objUser } = user;
        const newUser = new Model(objUser);
        newUser.password = encryptPassword(newUser.password);
        return await newUser.save();

    } catch (err) {
        return err;
    }
}

async function patchUser(id, user) {
    try {
        const { _id, state, google, email, ...objUser } = user;
        objUser.password = encryptPassword(objUser.password);
        return await Model.findByIdAndUpdate(id, objUser);

    } catch (err) {
        return err;
    }

}

async function deleteUser(id) {
    try {
        const deleteUser = await Model.findByIdAndUpdate(id, { state: false });
        return deleteUser;

    } catch (err) {
        return errr;
    }
}

module.exports = {
    get: getUserAll,
    add: addUser,
    patch: patchUser,
    delete: deleteUser
}