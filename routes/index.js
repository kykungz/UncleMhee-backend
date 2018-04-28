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
  console.log(ref)
  setTimeout(() => {
    ref.update({ done: true })
  }, (Math.random() * 10 + 20) * 1000)
  res.send({ success: true })
})

router.post('/printing', (req, res, next) => {
  const { printing } = req.body
  const ref = firebase.database().ref('/scb').push({
    catagory: 'printing',
    content: printing,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

  setTimeout(() => {
    ref.update({ done: true })
  }, (Math.random() * 10 + 20) * 1000)
  res.send({ success: true })
})

router.post('/fix', (req, res, next) => {
  const { fix } = req.body
  const ref = firebase.database().ref('/scb').push({
    catagory: 'repair',
    content: fix,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

  setTimeout(() => {
    ref.update({ done: true })
  }, (Math.random() * 10 + 20) * 1000)

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
    ref.update({ done: true })
  }, (Math.random() * 10 + 20) * 1000)

  res.send({ success: true })
})

router.post('/delivery', (req, res, next) => {
  const { service } = req.body
  const ref = firebase.database().ref('/scb').push({
    catagory: 'service',
    content: service,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

  setTimeout(() => {
    ref.update({ done: true })
  }, (Math.random() * 10 + 20) * 1000)

  res.send({ success: true })
})

router.post('/billing', (req, res, next) => {
  const { bill } = req.body
  const ref = firebase.database().ref('/scb').push({
    catagory: 'bill',
    content: bill,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

  setTimeout(() => {
    ref.update({ done: true })
  }, (Math.random() * 10 + 20) * 1000)

  res.send({ success: true })
})

module.exports = router
