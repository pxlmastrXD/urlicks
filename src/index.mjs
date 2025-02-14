// Imports
import express from 'express';
import Database from './db.mjs'

// Constants
const app = express();
let db = new Database("./db");

// Middleware
app.use(express.json)
app.use(express.static("static"));

// New link request
app.post('/newLink', async (req, res) => {
    let link = req.body.link;
    let id = Number(db.get("id")) + 1;
    db.set(link, id);
    db.set("id", id);
    res.json({
        "id": id
    })
})

// Get link request
app.get('/link/:id', async (req, res) => {
    let id = req.params.id;
    let link = db.get(id);
    res.redirect(link)
})

app.listen(8080, () => {
    console.log("App is listening on port 8080.")
})