import passport from 'passport'
import User from '../models/user'

export const signUp = (req, res) => {
  User.register(new User({ username : req.body.email }), req.body.password, function (err, user) {
    if (err) {
      return res.status(500).json(err.message)
    }
    return res.json({ authenticated: true, id: user._id })
  })
}

export const signIn = (req, res) => {
  User.findOne({ username: req.body.email }, function (err, user) {
    if (err)
      return res.json(500, err.message)
    if (!user)
      return res.json(500, 'No user found')
    user.authenticate( req.body.password, function (err, thisModel, passwordErr) {
      if (err)
        return res.json(500, err)
      if (passwordErr)
        return res.json(500, passwordErr.message)
      return res.json({ authenticated: true, id: user._id })
    })
  })
}
