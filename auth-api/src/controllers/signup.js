import bcrypt from 'bcrypt'

import collection from '../config/db'

const signup = async (req, res) => {
    try {
        const find = await collection.findOne({
            username: req.body.username
        })
        if (!find) {
            const hashed = bcrypt.hashSync(req.body.password, 10)
            const create = await collection.insert({
                username: req.body.username,
                password: hashed
            })
            return res.json(create)
        } else {
            return res.json({
                'status': 409
            })
        }
    } catch (err) {
        console.log(err)
    }
}

export default signup
