const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req,res) => {
    res.send({msg: "Skill issue"})
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})