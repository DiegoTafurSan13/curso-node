
const user = require('../components/user/network');
const rol = require('../components/role/network');
const login = require('../components/login/network');
function router(server){

    server.use('/user',user);
    server.use('/rol',rol);
    server.use('/auth',login);
}

module.exports = router;