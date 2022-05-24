const { varifyAccessToken } = require("../../utilities");

exports.authenticate = function (req, res, next) {
  
  // const token = req.getAccessToken();

  const {authorization} = req.headers;
  const token = authorization.split(' ')[1];
  if (token == null) {
      return res.status(401).json({
        errors: errors,
        message: "Unauthorized"
    });
  }

  varifyAccessToken(token, (err, user) => {

    if (err) {
      console.log(err)      
        return res.status(403).json({
            errors: errors,
            message: "Forbidden"
        });
    }

    req.user = user

    next()
  });
}