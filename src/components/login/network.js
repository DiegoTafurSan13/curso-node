const router = require('express').Router();
const { check } = require('express-validator');
const { controllerLogin, controllerGoogle } = require('./controller');
const { validatorResult } = require('../../middleware/validate-shield');
//const {verifiedEmail} = require('../../helpers/db_validate');
router.post('/login',
    [
        check('email','Email is null').isEmail(),
        check('password','Password is null').notEmpty(),
        validatorResult
    ]
    , controllerLogin);

router.post('/google', [
    check('id_token','Token is null').notEmpty(),
    validatorResult
], controllerGoogle);


module.exports = router;