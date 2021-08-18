
const Model = require('./models');
const { verifiedEmail } = require('../../helpers/db_validate');

async function getUserAll() {
    const users = await Model.find();
    return users;
}

async function addUser(user) {

    try {

        const { state, google, ...newuser } = user;
        const newUser = new Model(user);
        return await newUser.save();

    } catch (err) {

        const res = await verifiedEmail(user['email']);
        console.log(res);
        return res;
    }


}

module.exports = {
    get: getUserAll,
    add: addUser,
}