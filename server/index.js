import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bookstoreRoutes from './routes/bookStore.js'

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())

app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));

app.use('/bookstore', bookstoreRoutes )

const CONNECTION_URL = 'mongodb+srv://dylandu:dylandu@cluster0.kguvy.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    }))
    .catch(error => console.log(error.message))

mongoose.set('useFindAndModify', false)