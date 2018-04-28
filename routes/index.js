const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.get('/taxi', (req, res, next) => {
  res.send({
    taxi: true
  })
})

module.exports = router;
