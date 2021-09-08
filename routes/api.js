const router = require("express").Router();
const fs = require('fs');
const db = require("../db/db.json");

//GET
router.get("/api/notes", (req, res) => {
    
        res.json(db);
    });

//POST
router.post("/api/notes", (req, res) => {
    const id = Math.floor(Math.random()*999);
        const title = req.body.title;
        const text = req.body.text;

        const newNotes = {
            id : id,
            title : title,
            text : text,
        }
    db.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(db))
            res.json(db);
    });

module.exports = router;