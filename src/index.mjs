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
    let link = req.body.link;
    let id = Number(db.get("id")) + 1;
    db.set(id, link);
    db.set("id", id);
    res.json({
        "id": id
    })
})

// Get link request
app.get('/link/:id', (req, res) => {
    let id = req.params.id;
    let link = db.get(id).trim();
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
        link = 'http://' + link; // Or 'https://' depending on the expected scheme
    }
    console.log(link)
    res.redirect(302, link)
})

app.use("/", express.static("static"))

app.listen(3000, () => {
    console.log("App is listening!")
})