const User = require("../models/UserModel");
const {} = require("sequelize")

class UserService {
    async activate(activationLink) {
        const user = await User.findOne({where: {activationLink}});
        console.log("WORKING ACTIVATION")
        console.log(activationLink)
        console.log(user)
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
    async getUser(id) {
        const user = await User.findOne({where:{id}});
        if (!user) {
            throw new Error('Такого пользователя не существует')
        }
        return user;
    }
}

module.exports = new UserService();