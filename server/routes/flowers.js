const express = require('express')

const db = require('../db/flowers')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFlowers()
  .then(flowers => {
    res.json(flowers)
  })
})


module.exports = router