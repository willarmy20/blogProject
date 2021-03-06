const authReq = (req, res, next) => {
    console.log(req.isAuthenticated());
    // passport adds isAuthenticated
    if(req.isAuthenticated()) {
      next();
    } else (
      res.redirect('/login')
    )
  }

module.exports = authReq;
