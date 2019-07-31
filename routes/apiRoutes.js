const mongoose = require("mongoose")
const dburl = process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
mongoose.connect(dburl, { useNewUrlParser: true })
const db = require("../models")
const path = require("path")
const axios = require("axios")

/*
 *
* `/api/books` (get) - Should return all saved books as JSON.

* `/api/books` (post) - Will be used to save a new book to the database.

* `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id
 
 */



module.exports = function (app) {

    app.get("/api/books", function (req, res) {

        db.Books.find({}).then(function (data) {
            res.json(data)
        }).catch(function (err) {
            res.json(err)
        })
       
    });

    app.post("/api/books", function (req, res) {

        db.Note.create(req.body)
            .then(function (dbNote) {
                console.log(dbNote)
                return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
            })
            .then(function (dbArticle) {
                console.log(dbArticle)
                res.json(dbArticle);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.delete("/api/books/:id", function (req, res) {
        db.Article.find({
            _id: req.params.id
        })
            .populate("note")
            .then(function (data) {
                console.log(data)
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}