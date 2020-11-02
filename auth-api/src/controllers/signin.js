import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import collection from '../config/db'

const signin = async (req, res) => {
    try {
        const find = await collection.findOne({
            username: req.body.username
        })
        const validate = await bcrypt.compareSync(req.body.password, find.password)
        if (!validate) {
            return res.json({
                'status': 404
            })
        }
        const token = jwt.sign({ id: find._id }, process.env.JWT_KEY)
        return res.json({
            username: find.username,
            token
        })
    } catch (err) {
        console.log(err)
    }
}

export default signin
