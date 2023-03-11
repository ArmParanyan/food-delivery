const authService = require('../Services/auth.services');
async function register(req, res){
    try {
        res.send(await authService.register(req.body, req.file));
    } catch (err) {
        console.log(err.message)
    }
}

async function login(req, res) {
    try {
        res.send(await authService.login(req.body));
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = {
    register,
    login,
}