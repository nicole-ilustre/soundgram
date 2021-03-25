const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')


server.get('/', (req, res) => {
    // res.send("Hello there!")
    res.render('home')
})

server.get('/result', (req, res) => {
    // res.send("Hello there!")
    res.render('result')
})

module.exports = server