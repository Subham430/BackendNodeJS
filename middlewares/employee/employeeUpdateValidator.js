// external imports
const{check, validationResult} = require("express-validator");

// update user
const updateUserValidators=[
    check("user_name")
        .optional()
        .isLength({ min:1})
        .withMessage("Name is required")
        .isAlpha("en-US",{ignore: " -" })
        .withMessage("Name must not contain anything other than alphabet")
        .trim(),
    check("company_name")
        .optional()
        .isLength({ min:1})
        .withMessage("Name is required")
        .isAlpha("en-US",{ignore: " -" })
        .withMessage("Name must not contain anything other than alphabet")
        .trim(),
    check("password")
        .optional()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,16}$/, "i")
        .withMessage("Password must contains minimum 8 and maximum 16 characters, include one lowercase character, one uppercase character, a number, and a special character."),
];

const updateUserValidationHandler = function (req, res, next){
    const errors = validationResult(req);
    if (errors.isEmpty()){
        next();
        
    }else{
        // response the enrors
        res.status(500).json({
            errors: errors,
        });
    }
};

module.exports ={
    updateUserValidators,
    updateUserValidationHandler,
};