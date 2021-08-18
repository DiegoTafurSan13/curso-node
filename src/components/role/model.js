const {Schema,model} = require('mongoose');

const rolSchema = new Schema({
    role:{
        type:Schema.Types.String,
        required:true,
        unique:true
    }
},
{
    timestamps:true
});

module.exports = model('roles',rolSchema);