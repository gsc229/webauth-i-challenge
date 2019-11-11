const bcrypt = require('bcryptjs');
const router = require('express').Router();

const Users = require('../users/users-model');

router.post('/register', (req, res) => {
  let userInfo = req.body;

  bcrypt.hash(userInfo.password, 12, (err, hashedPassword) => {
    userInfo.password = hashedPassword;
    Users.add(userInfo)
      .then(savedInfo => {
        res.status(201).json(savedInfo);
      })
      .catch(err => {
        res.status(500).json(err);
      })
  })

})

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(err => {
      console.log('login error', error);
      res.status(500).json(err);
    })
})

module.exports = router;
