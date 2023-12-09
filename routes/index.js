var express = require('express')
const { model } = require('mongoose')
var router = express.Router()

router.get('/',function(req,res){
  res.render('index')
})
module.exports = router;