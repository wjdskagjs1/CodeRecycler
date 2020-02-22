const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir('./files', function(error, filelist){
    res.render('index', { title: 'CodeRecycler', rows: filelist });
  })
});

module.exports = router;
