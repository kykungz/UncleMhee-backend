const firebase = require('../firebase')
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.get('/taxi', (req, res, next) => {
  const ref = firebase.database().ref('/scb').push({
    catagory: 'taxi',
    content: req.headers.body,
    roomNumber: Math.round(Math.random() * 200),
    done: false
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
    content: req.headers.body,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

  setTimeout(() => {
    ref.remove()
  }, (Math.random() * 8 + 10) * 1000)

  res.send({ success: true })
})

router.get('/report', (req, res, next) => {
  const ref = firebase.database().ref('/scb').push({
    catagory: 'report',
    content: req.headers.body,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

  setTimeout(() => {
    ref.remove()
  }, (Math.random() * 8 + 10) * 1000)

  res.send({ success: true })
})

router.get('/service', (req, res, next) => {
  const ref = firebase.database().ref('/scb').push({
    catagory: 'service',
    content: req.headers.body,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

  setTimeout(() => {
    ref.remove()
  }, (Math.random() * 8 + 10) * 1000)

  res.send({ success: true })
})

router.get('/bill', (req, res, next) => {
  const ref = firebase.database().ref('/scb').push({
    catagory: 'bill',
    content: req.headers.body,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

  setTimeout(() => {
    ref.remove()
  }, (Math.random() * 8 + 10) * 1000)

  res.send({ success: true })
})

module.exports = router
