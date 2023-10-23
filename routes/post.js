const express=require('express');
const router=express.Router();
const {createPost,likeAndUnlikePost,deletePost,getPostOfFollowing, updateCaption, CommentOnPost, deleteComment} = require('../controllers/post');
const {isAuthenticated}=require('../middleware/auth');

router.route("/post/upload").post(isAuthenticated,createPost);

router.route("/post/:id")
.get(isAuthenticated,likeAndUnlikePost)
.put(isAuthenticated,updateCaption)
.delete(isAuthenticated,deletePost);

router.route("/posts").get(isAuthenticated,getPostOfFollowing);

router.route('/post/comment/:id').put(isAuthenticated,CommentOnPost).delete(isAuthenticated,deleteComment);

module.exports=router;