import passport from 'passport'
import User from '../models/user'
import bodyparser from 'body-parser'


module.exports = function loadUserRoutes(router, passport) {
  router.use(bodyparser.json());

  router.post('/sign_up', passport.authenticate('local-signup', { session: false}), function(req, res) {
    User.register(new User({ username : req.body.email, phoneNumber: req.body.phone, userType: req.body.type }), req.body.password, function (err, user) {
    if (err) {
      return res.status(500).json(err.message)
    }
    return res.json({ authenticated: true, id: user._id })
  })
})

  router.post('/sign_in', passport.authenticate('local-login', { session: false}), function(req, res) {
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
  });

  router.get('/signout', function(req, res) {
    req.logout();
    res.end();
  });

  //get auth credentials from server
  router.get('/load_auth_into_state', function(req, res) {
    res.json(req.user);
  });

  // get usernames for validating whether a username is available
  router.get('/all_usernames', function(req, res) {
    User.find({'local.username': { $exists: true } }, {'local.username': 1, _id:0}, function(err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }
      res.json(data);
    });
  })
};
