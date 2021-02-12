import mongoose from 'mongoose'
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

export const updateBook = async (req, res) => {
    const { id } = req.params
    const book = req.body
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg: `No book with id: ${id}`})
        const updatedBook = await BookModel.findByIdAndUpdate(id, { ...book, id }, { new: true })
        res.json(updatedBook)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export const deleteBook = async(req, res) => {
    const {id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ msg: `No book with id ${id}` })
        await BookModel.findByIdAndRemove(id)
        res.json({msg: 'Book deleted successfully'})
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}