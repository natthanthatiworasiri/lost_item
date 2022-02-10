const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()

mongoose.connect(process.env.DB, {})
.then(() => console.log("connected"))



app.get("/", (req, res) => {
    res.send("test1")
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Backend runnning on ${port}`)
})