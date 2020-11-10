import jwt from 'jsonwebtoken'

import collection from '../config/db'

const insert = async (req, res) => {
    jwt.verify(req.token, process.env.JWT_KEY, async (err, cred) => {
        if (err) {
            return res.sendStatus(403);
        }
        try {
            const { url, slug } = req.body
            const create = await collection.insert({
                url: url,
                slug: slug,
                user_id: cred.id
            })
            if (!create) {
                return res.json({
                    'status': 500
                })
            } else {
                return res.json(create)
            }
        } catch (err) {
            console.log(err)
        }
    });
}

export default insert
