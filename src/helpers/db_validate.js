const Model = require('../components/user/models');
const ModelRol = require('../components/role/model');

async function verifiedEmail(email){

    const data = await Model.findOne({
        email
    });

    if(data){
        return {
            msg:'Email is Register',
            status:400
        };
    }
    return true;
}
async function verifiedUserRol(data){
    console.log(data);
    const rol = await ModelRol.findOne({'role':data.toUpperCase()});
    if (!rol) {
        throw new Error(`Rol ${data} not exist`);
    }
}
async function verifiedRol(data){
  
    const rol = await ModelRol.findOne({'role':data.toUpperCase()});
    console.log(rol);
    if (rol) {
        throw new Error(`Rol ${data} duplicate`);
    }
}

module.exports = {
    verifiedEmail,
    verifiedUserRol,
    verifiedRol
}