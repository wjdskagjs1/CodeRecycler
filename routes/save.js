const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/', function(req, res, next) {
  fs.writeFileSync(`./files/${req.body.subject}`, '\ufeff' + req.body.content, {encoding: 'utf8'});
  res.render('save');
});

module.exports = router;
