import jwt from 'jsonwebtoken'

import collection from '../config/db'

const remove = async (req, res) => {
    jwt.verify(req.token, process.env.JWT_KEY, async (err, cred) => {
        if (err) {
            return res.sendStatus(403);
        }
        try {
            const removed = await collection.remove({
                _id: req.params.id
            })
            if (!removed) {
                return res.json({
                    'status': 500
                })
            } else {
                return res.json({
                    'status': 200
                })
            }
        } catch (err) {
            console.log(err)
        }
    });
}

export default remove
