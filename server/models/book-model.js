import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    bookName: String,
    price: String,
    category: String,
    description: String,
    userName: String,
    createAt: {
        type: Date,
        default: new Date()
    }
})

const BookModel = mongoose.model('BookModel', bookSchema)

export default BookModel