const router = require('express').Router();
const { check } = require('express-validator');

const { success } = require('../../helpers/response');
const controller = require('./controller');
const { validatorResult} = require('../../middleware/validate_shield');
const { verifiedRol } = require('../../helpers/db_validate');

router.get('/', (req, res) => {
    controller.get()
        .then(data => success(req, res, data));
});
router.post('/',[
    check('role').custom(verifiedRol),
    validatorResult
], (req, res) => {
    const data = req.body;
    controller.add(data)
        .then(data => success(req, res, data));
});
router.patch('/:id', (req, res) => {

});
router.delete('/:id', (req, res) => {

});



module.exports = router;