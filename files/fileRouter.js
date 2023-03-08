const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now() +
        "." +
        file.mimetype.slice(file.mimetype.indexOf("/") + 1)
    );
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("avatar"), async (req, res) => {
  console.log(req.file);
  console.log(req.body);
});

module.exports = router;
