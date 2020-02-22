const express = require('express');
const router = express.Router();
const fs = require('fs');


/* GET home page. */
router.get('/:filename', function(req, res, next) {
    fs.readFile(`./files/${req.params.filename}`, 'utf8', function(err, data){
      console.log(data);
      res.render('edit', { title: 'codeRecycler', subject: req.params.filename, content: data });
    });
});

router.get('/', function(req, res, next) {
    res.render('edit', { title: 'codeRecycler', subject: '', content: ''});
});

module.exports = router;
