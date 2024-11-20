const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())

app.get('/', (req,res) => {
    res.status(200).send({msg: "Skill issue"})
})

app.get('/route2', (req,res) => {
    res.status(200).send({msg: "Route 2"})
})

app.post('/route3', (req,res) => {
    const {name} = req.body
    res.status(200).send({msg: `Hello ${name}`})
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})