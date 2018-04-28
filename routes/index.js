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

  res.send({ success: true })
})

router.post('/repair', (req, res, next) => {
  const { fix, detail } = req.body
  const ref = firebase.database().ref('/scb').push({
    catagory: 'repair',
    content: fix,
    detail,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

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

  res.send({ success: true })
})

router.post('/delivery', (req, res, next) => {
  const { delivery } = req.body
  const ref = firebase.database().ref('/scb').push({
    catagory: 'delivery',
    content: delivery,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

  res.send({ success: true })
})

router.post('/billing', (req, res, next) => {
  const { billing } = req.body
  const ref = firebase.database().ref('/scb').push({
    catagory: 'billing',
    content: billing,
    roomNumber: Math.round(Math.random() * 200),
    done: false
  })

  res.send({ success: true })
})

module.exports = router
