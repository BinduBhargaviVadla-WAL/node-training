var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
const { writeFile, readFile } = require("fs");
const { dirname } = require("path");
//
router.get("/createfile/:fileName/:fileContent", function (req, res) {
  let { fileName, fileContent } = req.params;
  writeFile(`./files/${fileName}`, fileContent, (err) => {
    if (err) {
      throw err;
    } else {
      res.send("file created/modified");
    }
  });
});
router.get("/createdirectory/:newdirectory", function (req, res) {
  fs.mkdir(`./files/${req.params.newdirectory}`, (error) => {
    if (error) {
      throw error;
    } else {
      res.send("Created directory successfully");
    }
  });
});
router.get("/deletedirectory/:dirname", function (req, res) {
  const filePath = path.join(__dirname, "../");
  let stats = fs.statSync(`${filePath}files\\${req.params.dirname}`);
  if (stats.isDirectory()) {
    fs.rmdir(`./files/${req.params.dirname}`, (error) => {
      if (error) {
        throw error;
      } else {
        res.send("Deleted directory successfully");
      }
    });
  } else {
    fs.unlink(`./files/${req.params.dirname}`, (err) => {
      if (err) res.send(err);
      res.send(`file with name ${req.params.fileName} deleted`);
    });
  }
});

router.get("/readfile/:fileName", function (req, res) {
  fs.readFile(`./files/${req.params.fileName}`, "utf8", (err, content) => {
    if (err) {
      throw err;
    } else {
      console.log(content);
      res.send(content);
    }
  });
});
router.get("/readdirectory", function (req, res) {
  fs.readdir("./files", (err, files) => {
    if (err) res.json(err);
    console.log(files);
    res.send(files);
  });
});
router.get("/addcontent/:fileName", function (req, res) {
  const filePath = path.join(__dirname, "../", req.params.fileName);
  fs.appendFile(
    filePath,
    "\n new data is now added to file by us \n with 2 line",
    (err) => {
      if (err) res.json(err);
      res.send(`file with name ${req.params.fileName} is modified`);
    }
  );
});
router.get("/deletefile/:fileName", function (req, res) {
  const filePath = path.join(__dirname, "../", req.params.fileName);
  fs.unlink(filePath, (err) => {
    if (err) res.send(err);
    res.send(`file with name ${req.params.fileName} deleted`);
  });
});
module.exports = router;
