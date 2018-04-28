const firebase = require('../firebase')
const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.post('/taxi', (req, res, next) => {
  const { location } = req.body
  const ref = firebase.database().ref('/scb').push({
    catagory: 'taxi',
    content: location,
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

router.post('/fix', (req, res, next) => {
  const { fix } = req.body
  const ref = firebase.database().ref('/scb').push({
    catagory: 'fix',
    content: fix,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

  setTimeout(() => {
    ref.remove()
  }, (Math.random() * 8 + 10) * 1000)

  res.send({ success: true })
})

router.post('/report', (req, res, next) => {
  const { report } = req.body
  const ref = firebase.database().ref('/scb').push({
    catagory: 'report',
    content: report,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

  setTimeout(() => {
    ref.remove()
  }, (Math.random() * 8 + 10) * 1000)

  res.send({ success: true })
})

router.post('/service', (req, res, next) => {
  const { service } = req.body
  const ref = firebase.database().ref('/scb').push({
    catagory: 'service',
    content: service,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

  setTimeout(() => {
    ref.remove()
  }, (Math.random() * 8 + 10) * 1000)

  res.send({ success: true })
})

router.post('/bill', (req, res, next) => {
  const { bill } = req.body
  const ref = firebase.database().ref('/scb').push({
    catagory: 'bill',
    content: bill,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

  setTimeout(() => {
    ref.remove()
  }, (Math.random() * 8 + 10) * 1000)

  res.send({ success: true })
})

module.exports = router
