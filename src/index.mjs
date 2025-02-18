// Imports
import express from 'express';
import Database from './db.mjs'

// Constants
const app = express();
let db = new Database("./db");

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// New link request
app.post('/newLink', (req, res) => {
    console.log("Recieved new link request")
    let link = req.body.link;
    let id = Number(db.get("id")) + 1;
    db.set(link, id);
    db.set("id", id);
    res.json({
        "id": id
    })
})

// Get link request
app.get('/link/:id', (req, res) => {
    console.log("Got link request")
    let id = req.params.id;
    let link = db.get(id);
    res.redirect(link)
})

app.listen(3000, () => {
    console.log("App is listening!")
})