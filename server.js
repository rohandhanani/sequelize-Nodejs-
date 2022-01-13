const express = require('express');
const app = express();
require("dotenv").config();
const sequelize = require('./model/index')

const port = process.env.port;

sequelize.sync((err, res) => {
    if (err) {
        console.log('Table created failed')
    } else {
        console.log('Table created successfully')
    }
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRouter = require("./routes/productRoute");
app.use("/product", productRouter);


app.listen(port, () => {
    console.log(`Your port ${port} is successfuly Running...`);
})