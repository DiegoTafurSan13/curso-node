
const user = require('../components/user/network');

function router(server){

    server.use('/user',user);
}

module.exports = router;