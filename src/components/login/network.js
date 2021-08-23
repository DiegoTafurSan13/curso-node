const router = require('express').Router();
const { check } = require('express-validator');
const {controllerLogin} = require('./controller');
const {validatorResult} = require('../../middleware/validate-shield');
//const {verifiedEmail} = require('../../helpers/db_validate');
router.post('/login',
[
    check('email').isEmail(),
    check('password').notEmpty(),
    validatorResult
]
,controllerLogin);

module.exports = router;