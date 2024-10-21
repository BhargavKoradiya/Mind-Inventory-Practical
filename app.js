const express = require('express');
const bodyParser = require('body-parser');
const {Sequelize} = require('sequelize');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const env = require("./app/config/env");
process.env = {...process.env, ...env()}

const db = require("./app/config/db")(Sequelize);
const model = require("./app/models/index")(Sequelize, db)
const controllers = require("./app/controllers/index")(model);
require("./routes/routes")(app, model, controllers);

// SAMPLE API 
app.get("/test", (req, res) => {
    try {
        
        res.status(200).send("THANK YOU MIND INVENTORY !")

    } catch (error) {
        console.log("ERROR : ", error);
    }
})

app.listen(process.env.port, () => {
    console.log(`Server is listening on ${process.env.baseurl}....`);
})