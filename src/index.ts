import express from 'express';
import { Database } from "./db"

let db = new Database("./db")
const app = express()
app.use(express.json)

app.use(express.static("static"));

app.post('/newlink', async (req, res) => {
    const request = req.body;
    // Get new id
    let id = Number(await db.get("id") + 1);
    // Set link to id
    await db.set("${request.link}", "${id}");
    // Update id for next link
    await db.set("id", "${id}").then();

    res.json({
        "id": id
    })
})

app.get("/link/:id", async (req, res) => {
    let id = req.params.id;
    let link = await db.get(id);
    res.redirect(link);
})

app.listen(8080, () => {
    console.log("App is listening on port 8080.")
})