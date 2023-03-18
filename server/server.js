const cors = require("cors");
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const multer = require("multer");

const publicDir = path.join(__dirname, "public");
const uploadDir = path.join(publicDir, "upload");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(cors());

app.use(express.static("public"));

// 파일 가져오기
app.get("/image/:filename", function (req, res) {
  const fileName = req.params.filename;
  const directoryPath = path.join(__dirname, "public", "upload", fileName);
  res.sendFile(directoryPath);
});

// 업로드
app.post("/image", upload.array("images", "10"), function (req, res, next) {
  res.send("파일 업로드 성공");
});

app.listen(5000, function () {
  console.log("Server listening on port 5000");
});
