import express from 'express'
import { getBooks, getBook, addBook, updateBook, deleteBook } from '../controllers/bookStore-controller.js' 

const bookRouter = express.Router()

bookRouter.get('/', getBooks) 

bookRouter.get('/:id', getBook)

bookRouter.post('/', addBook)

bookRouter.patch('/:id', updateBook)

bookRouter.delete('/:id', deleteBook)

export default bookRouter