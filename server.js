const fs = require('fs')
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
  res.render('home')
})

server.get('/result', (req, res) => {
  fs.readFile('./sound.json', 'utf8', (err, data) => {
    if (err) console.log(err)
    const obj = JSON.parse(data)
    res.render('result', obj)
  })
})


server.post('/result', (req, res) => {
  fs.readFile('./sound.json', 'utf8', (err, data) => {
    if (err) console.log(err)
    const obj = JSON.parse(data)
    const doorbell = obj.sounds.find(item => item.expected === 'doorbell')
    doorbell.actual = req.body.answer1
    const cat = obj.sounds.find(item => item.expected === 'cat')
    cat.actual = req.body.answer2
    const washingmachine = obj.sounds.find(item => item.expected === 'washingmachine')
    washingmachine.actual = req.body.answer3
    fs.writeFile('./sound.json', JSON.stringify(obj), (err) => {
      if (err) console.log(err)
      res.redirect('/result')
    })
  })
})

module.exports = server