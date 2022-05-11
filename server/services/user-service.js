const {User} = require("../models/UserModel");
const {} = require("sequelize")

class UserService {
    async activate(activationLink) {
        const user = await User.findOne({activationLink});
        if (!user) {
            throw new Error('Неккоректная ссылка активации')
        }
        await user.update({isActivated: true})
        await user.save();
    }
    async getAllUsers() {
        const users = await User.findAll();
        return users;
    }
}

module.exports = new UserService();