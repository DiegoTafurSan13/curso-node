const Model = require('./model');

async function getRol(role) {
    try {
        let findRol = {};

        if (role !== null) {
            findRol = await Model.find({ 'role': role.toUpperCase() });
            return findRol;
        }

        const [total,foundRol] = await Promise.all([
            Model.countDocuments(),
            Model.find()
        ]);
        return {
            total,
            foundRol
        }
    } catch (err) {
        return err;
    }
};

async function addRol(data) {
    try {
        const newRol = {
            role: data.role.toUpperCase()
        }
        const rol = new Model(newRol);
        return await rol.save();

    } catch (err) {
        return err;
    }
};

async function patchRol(id, rol) {
    try {
        const { _id, ...objRol } = rol;
        const patchRol = await Model.findByIdAndUpdate(id,{role:objRol.toUpperCase()});
        return patchRol;
    } catch (err) {
        return err;
    }
};

async function deleteRol(id){
    try {
        return await Model.findByIdAndDelete(id);
        
    } catch (err) {
        return err;
    }
}

module.exports = {
    get: getRol,
    add: addRol,
    patch: patchRol,
    delete:deleteRol
};