const db = require('mongoose');

async function connect(){
    try {
        await db.connect(process.env.MONGO_CNN,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        });
        console.log('[CONFIG] conneccion exitosa');

    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    connect,
};