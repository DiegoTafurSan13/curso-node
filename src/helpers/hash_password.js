const bcryptjs = require('bcryptjs');

const encryptPassword = (password) => {
    const salt = bcryptjs.genSaltSync();
    const hash = bcryptjs.hashSync(password,salt);
    return hash;
};

const matchPassword = (newPassword,hashPassword)=>{
    const match = bcryptjs.compareSync(newPassword,hashPassword);
    return match;
};

module.exports = {
    encryptPassword,
    matchPassword
}