var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bancomer Gateway' });
});

router.post('/pay', function(req, res, next){
    var num = Math.floor(Math.random() * 5) + 1;

    if(num > 1){
      res.json({result: 'accepted', bank: 'Bancomer'});
    } else {
      res.json({result: 'rejected', bank: 'Bancomer'});
    }
});

router.post('/pre_auth', function(req, res, next){
    var num = Math.floor(Math.random() * 5) + 1;

    if(num > 1){
        res.json({result: 'accepted', bank: 'Bancomer'});
    } else {
        res.json({result: 'rejected', bank: 'Bancomer'});
    }
});

module.exports = router;
