import monk from 'monk'

const db = monk(process.env.DB_URL)
const collection = db.get('links')

export default collection
