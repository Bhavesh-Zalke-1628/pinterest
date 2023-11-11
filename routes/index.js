var express = require('express');
var router = express.Router();
const userModel = require('./users')
const postModel = require('./post')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/alluserPost', async function (req, res, next) {
  let allPost =  await userModel
  .findOne({_id : "654faa0d6afaccc9b10a1a34"})
  .populate('posts');
  res.send(allPost);
});


router.get('/createUser', async function (req, res, next) {
  let createdUser = await userModel.create({
    username: "bhavesh",
    password: "bhavesh123",
    post: [],
    email: "abc@123",
    fullname: "bhavesh zalke"
  })

  res.send(createdUser);
});



router.get('/createPost', async function (req, res, next) {
  let createdPost = await postModel.create({
    postText: 'hello i am bhavesh zalke ',
    user: "654faa0d6afaccc9b10a1a34"
  })
  // res.send(createdPost);
  let user = await userModel.findOne({
    _id: "654faa0d6afaccc9b10a1a34"
  })
  user.posts.push(createdPost._id);
  await user.save();
  res.send("Done Done");
});
module.exports = router;
