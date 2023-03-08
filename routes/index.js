var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer({ dest: "files" });
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

var router = express.Router();

// const storageConfig = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "files");
//   },

//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

/* GET home page. */
// router.use(bodyParser.text({ type: "/" }));
// router.use(express.static(__dirname));

// router.use(multer({ storage: storageConfig }).single("avatar"));
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});
router.get("/doc", function (req, res, next) {
  res.render("documents", { title: "Documents" });
});
// router.post("/about", urlencodedParser, (req, res) => {
//   if (!req.body) return res.sendStatus(400);
//   console.log(req.body);
//   res.send("Data received");
// });
// router.post("/", upload.single("avatar"), function (req, res, next) {
//   console.log(req.body, req.file);
// });

module.exports = router;
