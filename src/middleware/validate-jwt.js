const jwt = require('jsonwebtoken');
const { request, response } = require('express');

const ModelUser = require('../components/user/models')

const validateJWT = async (req = request, res = response, next) => {

    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({ msg: 'Token is empty' });
    }

    try {

        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const foundUser = await ModelUser.findById({ '_id': uid });
        if(!foundUser){
            return res.status(400).json({
                msg:'not found user'
            });
        }
        if(!foundUser.status){
            return res.status(400).json({
                msg:'User was eliminate of DB'
            });
        }

        req.user = foundUser;

        next();
        
    } catch (err) {
        return res.status(401).json({ msg: 'Invalid Token' });
    }

};

module.exports = {
    validateJWT
};