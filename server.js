'use strict'

const express = require('express');
const cors = require('cors');
require('dotenv').config();








const server = express();
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT;
mongoose.connect(`${process.env.MONGO_SERVER_LINK}`);
const mongoose = require('mongoose');





const { GetBook } = require('./modules/books')

const { deleteBooks } = require('./modules/books')

const { AddBook } = require('./modules/books')

const { updateBooks } = require('./modules/books')


server.post('/addBooks', AddBook)

server.get('/books', GetBook)

server.get('/', homeHandler);

server.put('/updateBook', updateBooks)

server.delete('/deleteBooks', deleteBooks)




function homeHandler(req, res) {

    res.status(200).send('home route')

}


server.listen(PORT, () => {

    console.log(`PORT is working on ${PORT}`)

})