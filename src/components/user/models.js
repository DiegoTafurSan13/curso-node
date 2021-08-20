const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    img: {
        type: Schema.Types.String
    },
    role: {
        type: Schema.Types.String,
        required: true,
    },
    google: {
        type: Schema.Types.Boolean,
        default: false
    },
    state: {
        type: Schema.Types.Boolean,
        default: true
    }
},
    {
        timestamps: true
    });

userSchema.methods.toJSON = function () {
    const { __v, password, ...user } = this.toObject();
    return user;
};

module.exports = model('users', userSchema);