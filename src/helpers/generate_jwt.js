const jwt = require('jsonwebtoken');

const generateJWT = async (uid = '') => {

    return new Promise((resolve, reject) => {

        const payLoad = { uid };

        jwt.sign(payLoad, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
            
        }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });

};

module.exports = {
    generateJWT,
}