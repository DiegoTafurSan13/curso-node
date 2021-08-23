const { request, response } = require('express');

const validateAdmin = async (req = request, res = response, next) => {
    if (!req.user) {
        return res.status(500).json({
            msg: 'Object User not exist',
        });
    }

    if (req.user.role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `User ${res.user.name} not has access`,
        });
    }
    next();
};

const validateRole = (...resto) => {
    return async (req, res, next) => {
        if (!req.user) {
            return res.status(500).json({
                msg: 'Object User not exist',
            });
        }
        if (!resto.includes(req.user.role)) {
            return res.status(400).json({
                msg:`Role ${req.user.role} not has include`,
            });
        }
        next();
    };


};

module.exports = {
    validateAdmin,
    validateRole
}