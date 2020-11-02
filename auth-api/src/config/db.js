import monk from 'monk'

const db = monk(process.env.DB_URL)
const collection = db.get('users')

export default collection
