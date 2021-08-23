const router = require('express').Router();
const { check } = require('express-validator');

//Import me
const { controllerPost, controllerGet, controllerPatch, controllerDelete } = require('./controller');
const { validatorResult } = require('../../middleware/validate-shield');
const { verifiedRol, verifiedIdRol } = require('../../helpers/db_validate');

router.get('/', controllerGet);

router.post('/', [
    check('role', 'role not is empty').notEmpty(),
    check('role').custom(verifiedRol),
    validatorResult
], controllerPost);

router.patch('/:id', [
    check('id', 'not is mongoId').isMongoId(),
    check('id').custom(verifiedIdRol),
    check('role', 'role not is empty').notEmpty(),
    validatorResult
], controllerPatch);

router.delete('/:id', [
    check('id', 'not is mongoId').isMongoId(),
    check('id').custom(verifiedIdRol),
    validatorResult
], controllerDelete);

module.exports = router;