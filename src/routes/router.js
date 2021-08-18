
const user = require('../components/user/network');
const rol = require('../components/role/network');
function router(server){

    server.use('/user',user);
    server.use('/rol',rol);
}

module.exports = router;