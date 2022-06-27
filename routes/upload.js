var express = require("express");
const multer = require("multer");
var router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    let uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({
  //   dest: "uploads/",
  storage: storage,
  limits: { fieldNameSize: 100, fileSize: 10240000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png,.jpg,.jpeg form allowed!"));
    }
  },
});
router.get("/", (req, res) => {
  const pathfile = __dirname + "/upload.html";
  res.sendFile(pathfile);
});
router.post("/", upload.single("file-to-upload"), (req, res) => {
  res.send("file upload");
});
module.exports = router;
