const firebase = require('../firebase')
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.get('/taxi', (req, res, next) => {
  console.log(req.body)
  const ref = firebase.database().ref('/scb').push({
    catagory: 'taxi',
    content: ''
  })

  setTimeout(() => {
    ref.remove()
  }, (Math.random() * 8 + 10) * 1000)

  res.send({ success: true })
})

router.get('/print', (req, res, next) => {
  const ref = firebase.database().ref('/scb').push({
    catagory: 'print',
    content: ''
  })

  setTimeout(() => {
    ref.remove()
  }, (Math.random() * 8) * 1000)

  res.send({ success: true })
})

router.get('/fix', (req, res, next) => {
  const ref = firebase.database().ref('/scb').push({
    catagory: 'fix',
    content: ''
  })

  res.send({ success: true })
})

router.get('/report', (req, res, next) => {
  const ref = firebase.database().ref('/scb').push({
    catagory: 'fix',
    content: ''
  })

  res.send({ success: true })
})


module.exports = router
