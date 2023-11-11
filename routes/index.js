var express = require('express');
var router = express.Router();
const userModel = require('./users')
const postModel = require('./post')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createUser', async function (req, res, next) {
  let createdUser = await userModel.create({
    username: "4dfbc",
    password: "abc1",
    email: "abc@1fdff",
    fullname: "abc xyz"
  })

  res.send(createdUser);
});

router.get('/createPost', async function (req, res, next) {
  let createdPost = await postModel.create({
    postText: 'hello this is my post',
  })

  res.send(createdPost);
});
module.exports = router;
