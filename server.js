const SpellChecker = require('spellchecker');
const express = require("express");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

function GetWords (word)  {
    return SpellChecker.getCorrectionsForMisspelling(word);
}

app.get("/",(req,res) => {
    res.send({message:"Server is live"})
})

app.post("/spell",(req,res) => {
    try {
        const {word} = req.body;
    let miss = GetWords(word).splice(0,5)
    res.status(200).json(miss)
    } catch (error) {
        res.status(404)
        console.log(error)

    }
   

})

app.listen(8080, () => {
    console.log("Server is running")
})