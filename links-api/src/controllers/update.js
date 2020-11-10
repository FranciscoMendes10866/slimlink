import jwt from 'jsonwebtoken'

import collection from '../config/db'

const update = async (req, res) => {
    jwt.verify(req.token, process.env.JWT_KEY, async (err, cred) => {
        if (err) {
            return res.sendStatus(403);
        }
        try {
            const updated = await collection.update({
                _id: req.params.id
            }, { $set: req.body })
            if (!updated) {
                return res.json({
                    'status': 500
                })
            } else {
                return res.json(req.body)
            }
        } catch (err) {
            console.log(err)
        }
    });
}

export default update
