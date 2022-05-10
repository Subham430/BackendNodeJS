const { check, validationResult } = require("express-validator");

const doLoginValidators = [
  check("email")
    .normalizeEmail()
    .isEmail()
    .withMessage("email is required"),
  check("password")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/, "i")
    .withMessage("Password must contains minimum 8 and maximum 16 characters, include one lowercase character, one uppercase character, a number, and a special character."),
];

const doLoginValidationHandler = function (req, res, next) {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    res.status(500).json({ error: mappedErrors });    
  }
};

module.exports = {
  doLoginValidators,
  doLoginValidationHandler,
};
