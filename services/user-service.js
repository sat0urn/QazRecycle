const User = require("../models/UserModel");

class UserService {
    async activate(activationLink) {
        const user = await User.findOne({activationLink: activationLink});
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
        return await User.findAll();
    }
    async getUser(id) {
        const user = await User.findOne({id: id});
        if (!user) {
            throw new Error('Такого пользователя не существует')
        }
        return user;
    }
}

module.exports = new UserService();