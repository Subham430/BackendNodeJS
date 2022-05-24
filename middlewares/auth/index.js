const { varifyAccessToken } = require("../../utilities");

exports.authenticate = function (req, res, next) {
  // console.log("authenticate")
  // const token = req.getAccessToken();
  console.log("calling authenticate")

  const {authorization} = req.headers;
  const token = authorization.split(' ')[1];
  if (token == null) {
      return res.status(401).json({
        message: "Unauthorized"
    });
  }
  console.log("1")

  varifyAccessToken(token, (err, user) => {
    console.log("checking for verify")
    if (err) {
      console.log("")
      return res.status(403).json({
          errors: err,
          message: "Forbidden"
      });
    }

    req.user = user

    next()
  });
}