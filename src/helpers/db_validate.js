const ModelUser = require('../components/user/models');
const ModelRol = require('../components/role/model');

async function verifiedEmail(email) {

    const data = await ModelUser.findOne({
        email
    });

    if (data) {
        return {
            msg: 'Email is Register',
            status: 400
        };
    }
    return null;
}
async function verifiedUserRol(data) {
    
    const rol = await ModelRol.findOne({ 'role': data.toUpperCase() });
    if (!rol) {
        throw new Error(`Rol ${data} not exist`);
    }
}

async function verifiedId(id){
    const foundUser = await ModelUser.findById(id);
    if (!foundUser) {
        throw new Error(`User with ${id} not exist`);
    }
}

async function verifiedRol(data) {

    const rol = await ModelRol.findOne({ 'role': data.toUpperCase() });
    console.log(rol);
    if (rol) {
        throw new Error(`Rol ${data} duplicate`);
    }
}

async function verifiedIdRol(id){
    const foundRol = await ModelRol.findById(id);
    if (!foundRol) {
        throw new Error(`Rol with ${id} not exist`);
    }
}

module.exports = {
    verifiedEmail,
    verifiedUserRol,
    verifiedRol,
    verifiedId,
    verifiedIdRol
}