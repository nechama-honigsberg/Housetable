const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors');
const router = require("./routes/api")


const app = express()
const port = 3001

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json())

const connectionParams = {
    useUnifiedTopology: true,
}

mongoose.connect("mongodb+srv://Nechama:123456Aa@cluster0.piqnqmo.mongodb.net/?retryWrites=true&w=majority",
    connectionParams)
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(`error connecting ${err}`);
    })


app.use('/', router)

app.listen(port, () => console.log(`app listening on port ${port}!`))


