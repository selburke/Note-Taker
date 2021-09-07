const router = require("express").Router();
const fs = require('fs');
const db = require("../db/db.json");

//GET
router.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", function (err, data) {
        const parsedData = JSON.parse(data)
        res.json(parsedData)
    })
})

//POST
router.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", function (err, data) {
        const parsedData = JSON.parse(data)
        const newData = req.body
        parsedData.push(newData)
        fs.writeFile("./db/db.json", JSON.stringify(parsedData), function (err) {
            res.json(parsedData)
        })
    })
})

//DELETE
router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;

    console.log(id);    
    const index = db.findIndex((data, index) => data.id == id);
    db.splice(index, 1);
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.json(db);
});

module.exports = router