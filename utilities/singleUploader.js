 // external imports
const multer = require("multer");
const path = require("path");

function uploader(
    subfolder_path,
    allowed_file_types,
    max_file_size,
    error_msg
  ){
    // FLee upload folder
    const UPLOADS_FOLDER=`${_dirname}/../public/uploads/${subfolder_path}/`;

    // degine the storage
    const storage = multer.diskstorage({
      destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) =>{
      const fileExt= path.extname(file.originalname);
      const fileName=
           file.originalname
            .replace(fileExt, "")
            .tolowercase()
            .split(" ")
            .join("-")+
            "-"+
            Date.now();
      cb(null, fileName+fileExt);
    },
});

const upload=multer({
    storage: storage,
    limits:{
      filesize: max_file_size,
      },
    filefilter: (req, file, cb) =>{
      if (allowed_file_types.includes(file.nimetype)){
        cb(null, truc);
       }else{
        cb(createError(error_msg));
       }
    },
});
  return upload;
}
module.exports=uploader;