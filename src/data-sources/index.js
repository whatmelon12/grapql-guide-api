import Reviews from './Review'
import Users from './Users'
import { db } from '../db'

export default () => ({
    reviews: new Reviews(db.collection('reviews')),
    users: new Users(db.collection('users'))
})