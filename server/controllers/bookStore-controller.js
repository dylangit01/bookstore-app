import BookModel from '../models/book-model.js'

export const getBooks = async (req, res) => {
    try {
        const bookList = await BookModel.find()
        res.status(200).json(bookList)
    } catch (error) {
        res.status(400).json({msg:error.message })
    }
}

export const getBook = (req, res) => {
    const {id} = req.body.params
    try {
        console.log('getBooks');
    } catch (error) {
        console.log(error);
    }
}

export const addBook = async (req, res) => {
    const book = req.body
    const newBook = new BookModel(book)
    try {
        await newBook.save()
        res.status(201).json(newBook)
    } catch (error) {
        res.status(409).json({msg: error.message})
    }
}

export const updateBook = (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export const deleteBook = (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}