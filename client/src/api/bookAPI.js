import axios from 'axios'

const URL = 'http://localhost:5000/bookstore'

const API = axios.create({baseURL: URL})

export const fetchBooks = () => API.get('/')

export const addBook = (newBook) => API.post('/', newBook)

export const updateBook = (id, updatedBook) => API.patch(`/${id}`, updatedBook)

export const deleteBook = (id) => API.delete(`/${id}`)