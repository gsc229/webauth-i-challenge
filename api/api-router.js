const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ api: "Your base api router is running" })
})

module.exports = router;