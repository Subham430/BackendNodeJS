const uploader=require("../../utilities/singleUploader");

function avatarupload(req, res, next){
  const upload=uploader(
    "avatars",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only jpg, jpeg or .png format allowed!"
  );
    // call the middleware function
    upload. any()(reg, res, (err) =>{
        if (err){
            res. status(500).json({
                errors:{
                    avatar:{
                        msg: enr.message,
                    }
                }
            })
        }else{
            next();
        }
    });
}
   module.exports = avatarupload;