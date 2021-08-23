const router = require('express').Router();
const { check } = require('express-validator');
//Import me
const { controllerGet, controllerPost, controllerPatch, controllerDelete } = require('./controller');
const { verifiedUserRol, verifiedId } = require('../../helpers/db_validate');
const { validatorResult } = require('../../middleware/validate-shield');
const { validateJWT } = require('../../middleware/validate-jwt');
const { validateAdmin,validateRole } = require('../../middleware/validate_role');

router.get('/', controllerGet);

router.post('/',
    [
        check('name', 'name is require').notEmpty(),
        check('email', 'not is structure email').isEmail(),
        check('password', 'password with min 6 letters').isLength({ min: 6 }),
        check('role').custom((role) => verifiedUserRol(role)),
        validatorResult
    ]
    , controllerPost);

router.patch('/:id',
    [
        check('id', 'not is ID of mongo').isMongoId(),
        check('id').custom(verifiedId),
        check('role').custom(verifiedUserRol),
        validatorResult
    ]
    , controllerPatch);

router.delete('/:id',
    [
        validateJWT,
        validateAdmin,
        //validateRole('ADMIN_ROLE','VENTAS_ROLE','CUALQUIERCOSA_ROL'),
        check('id', 'not is ID of mongo').isMongoId(),
        check('id').custom(verifiedId),
        validatorResult
    ]
    , controllerDelete);

module.exports = router;