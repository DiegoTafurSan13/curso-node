const ModelLogin = require('./model');
const ModelUser = require('../user/models');
const { matchPassword } = require('../../helpers/hash_password');
const { generateJWT } = require('../../helpers/generate_jwt');

async function authenticate(email, password) {

    //verificar si el email existe
    const foundUser = await ModelUser.findOne({'email':email});

    if (!foundUser) {
        return {
            msg: 'Email or password incorrect - email',
            status: 400
        }
    }
    //verificar si el usuario esta activo
    if(!foundUser.state){
        return {
            msg: 'Email or password incorrect - state:false',
            status: 400
        }
    }

    //hacer match al password
    const match = matchPassword(password, foundUser.password);

    if(!match){
        return {
            msg: 'Email or password incorrect - password',
            status: 400
        }
    }

    //generar el token
   const jwt =  await generateJWT(foundUser._id);
   return {
       jwt,
       foundUser
   }
    
}

module.exports = {
    authenticate,
}