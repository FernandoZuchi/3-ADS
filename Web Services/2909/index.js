const express = require("express");
const app = express();

app.listen(45678, () => {
    console.log(`Aplicação rodando na porta 45678`);
})

app.get("/", () => {

});

app.get("/games", (req,res) => {
    res.statusCode = 200;
    res.json(DB.games);
})

app.get("/game/:id", (req,res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else {
        var id = parseInt(req.params.id);
    }
});

var DB = {
    games: [
        {
            id: 23,
            title: "The last of us part II",
            year: 2020,
            price: 130
        },
        {
            id: 65,
            title: "The legend of Zelda: breath of the wild",
            year: 2017,
            price: 150
        },
        {
            id: 2,
            title: "Grand Theft Auto IV",
            year: 2008,
            price: 20
        }
    ]
}