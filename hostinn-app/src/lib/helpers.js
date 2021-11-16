const bcrypt = require('bcryptjs');

const helpers = {};

helpers.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    return encryptedPassword;
}

helpers.compairPassword = async (password, dbPassword) => {
    try {
        return await bcrypt.compare(password, dbPassword);
    } catch (err) {
        console.log(err);
    }   
}

module.exports = helpers;