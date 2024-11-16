const express = require('express');
require("./src/db/conn");

const MensRanking = require('./src/models/mens');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/mens", async(req, res) => {
    try{
        const addingMensRecords =  new MensRanking(req.body)
        addingMensRecords.save();
        console.log(req.body);

    }catch(e){
        res.send(e);
    }
});

app.listen(port, () => {
    console.log(`connection is live at port number: ${port}`);
})