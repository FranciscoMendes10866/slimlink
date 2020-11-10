import jwt from 'jsonwebtoken'

import collection from '../config/db'

const find = async (req, res) => {
    jwt.verify(req.token, process.env.JWT_KEY, async (err, cred) => {
        if (err) {
            return res.sendStatus(403);
        }
        try {
            const find = await collection.find({
                user_id: cred.id
            })
            if (!find) {
                return res.json({
                    'status': 500
                })
            } else {
                return res.json(find)
            }
        } catch (err) {
            console.log(err)
        }
    });
}

export default find
