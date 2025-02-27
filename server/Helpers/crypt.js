const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)

module.exports = {
    hashPassword(password){
        return bcrypt.hashSync(password, salt)
    },
    comparePassword(password, passwordDB){
        return bcrypt.compareSync(password, passwordDB)
    },
    generateJWT(payload){
        console.log(payload, process.env.JWT_SECRET, '================');
        let token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn : '1d'})
        console.log(token)
        return token
    },
    verifyJWT(token){
        return jwt.verify(token, process.env.JWT_SECRET)
    }
}