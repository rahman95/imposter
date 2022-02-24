const express = require('express')

const router = express.Router()

/* GET home page. */
router.get('/', (_, res) => res.json({ foo: 'bar' }))

module.exports = router
