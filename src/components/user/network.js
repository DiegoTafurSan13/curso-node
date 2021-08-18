const router = require('express').Router();
const { check } = require('express-validator');

const { success } = require('../../helpers/response');
const controller = require('./controller');
const { validatorResult } = require('../../middleware/validate_shield');
const { verifiedUserRol } = require('../../helpers/db_validate');

router.get('/', (req, res) => {
    controller.get()
        .then(data => success(req, res, data));
});
router.post('/', [
    check('name', 'name is require').notEmpty(),
    check('email', 'not is structure email').isEmail(),
    check('password', 'password with min 6 letters').isLength({ min: 6 }),
    check('role').custom((role )=> verifiedUserRol(role)),
    validatorResult
]
    , (req, res) => {
        const user = req.body;
        controller.add(user)
            .then(data => success(req, res, data));
    });
router.patch('/:id', (req, res) => {

});
router.delete('/:id', (req, res) => {

});



module.exports = router;