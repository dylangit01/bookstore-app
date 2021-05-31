import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bookstoreRoutes from './routes/bookStore.js'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
app.use(cors())

const PORT = process.env.PORT || 5000
app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));

app.use('/bookstore', bookstoreRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to BookStore API')
})

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    }))
    .catch(error => console.log(error.message))

mongoose.set('useFindAndModify', false)