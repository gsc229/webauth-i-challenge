const bcrypt = require('bcryptjs');
const router = require('express').Router();

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');

router.use('/auth', authRouter);
router.use('/users', usersRouter);


router.get('/', (req, res) => {
  res.json({ api: "Your base api router is running" })
})

module.exports = router;