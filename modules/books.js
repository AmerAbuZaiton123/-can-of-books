
const mongoose = require('mongoose');

const BooksSc = new mongoose.Schema({
    title: String,

    description: String,

    status: String,

    email: String
});


const BookMod = mongoose.model('books', BooksSc);

function sedBooksInfo() {
    const Amer = new BookMod({
        title: 'JavaScriptBook',

        description: 'book about learn JavaScript',

        status: 'done',

        email: 'AmerAbuZaiton@outlook.com'
    })


    const Anas = new BookMod({
        title: 'learn Java',

        description: 'book about learn Java',

        status: 'done',

        email: 'AmerAbuZaiton@outlook.com'

    })
    const Osama = new BookMod({

        title: 'learn CSS',

        description: 'book about learn CSS',

        status: 'done',

        email: 'AmerAbuZaiton@outlook.com'
    })


    const Ahmad = new BookMod({

        title: 'learn HTML',

        description: 'book  about  learn HTML',

        status: 'done',

        email: 'AmerAbuZaiton@outlook.com'
    })
    Amer.save();

    Anas.save();

    Osama.save();

    Ahmad.save();
}

function GetBook(req, res) {

    let Email3 = req.query.email;

    BookMod.find({ email: Email3 }, function (error, EmailData) {
        if (error) {

            console.log('error in getting data', error)

        }
        else {
            res.send(EmailData)
        }
    })
}

async function AddBook(req, res) {
    console.log(req.body);

    let { email, title, description, status } = req.body;

    await BookMod.create({
        email: email,
        title: title,
        description: description,
        status: status
    })


    BookMod.find({ email: email }, function (error, EmailData) {
        if (error) {
            console.log('error in getting data', error)
        }
        else {
            res.send(EmailData)
        }
    })
}
function deleteBooks(req, res) {
    let bookID = req.query.bookID;
    let email = req.query.email;


    BookMod.deleteOne({ _id: bookID }).then(() => {
        BookMod.find({ email: email }, function (error, EmailData) {

            if (error) {
                console.log('error in getting data', error)
            }

            else {
                res.send(EmailData)
            }
        })
    })



}

function updateBooks(req, res) {
    console.log('update dataaa', req.body)
 
    let { title, description, status, bookID, email } = req.body;
 
    BookMod.findByIdAndUpdate(bookID, { title, description, status }, (error, updatedData) => {
        if (error) {
            console.log('error in update data')
        }
        else {

            console.log('updatedData', updatedData)

            BookMod.find({ email: email }, function (error, EmailData) {

                if (error) {
 
                    console.log('error in getting data', error)
                }


                else {
                    res.send(EmailData)
                }
            })
        }
    })

}

module.exports = {
    GetBook,
    AddBook,
    deleteBooks,
    updateBooks
}