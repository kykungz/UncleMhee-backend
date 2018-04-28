const firebase = require('../firebase')
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.get('/taxi', (req, res, next) => {
  const ref = firebase.database().ref('/scb').push({
    catagory: 'taxi',
    destination: ''
  })

  setTimeout(() => {
    ref.remove()
  }, 5 * 1000)

  res.send({
    taxi: true
  })
})

module.exports = router
