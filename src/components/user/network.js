const router = require('express').Router();
const {success,error} = require('../../helpers/response');

router.get('/',(req,res)=>{
    success(req,res,'data obtenida',200);
});
router.post('/',(req,res)=>{
    const params = req.body;
    res.send(params);
});
router.patch('/:id',(req,res)=>{

});
router.delete('/:id',(req,res)=>{

});

module.exports = router;