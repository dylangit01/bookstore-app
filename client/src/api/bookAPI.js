import axios from 'axios'

const URL = 'https://dylan-bookstore-app.herokuapp.com/bookstore/'

const API = axios.create({baseURL: URL})

export const fetchBooks = () => API.get('/')

export const createBook = (newBook) => API.post('/', newBook)

export const updateBook = (id, updatedBook) => API.patch(`/${id}`, updatedBook)

export const deleteBook = (id) => API.delete(`/${id}`)