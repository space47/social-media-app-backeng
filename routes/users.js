const express = require("express");
const router = express.Router();
const {
  register,
  login,
  UserFollow,
  logOut,
  updatePassword,
  updateProfile,
  deleteMyProfile,
  myProfile,
  getUserProfile,
  getAllUsers,
  forgotPassword,
  resetPassword,
  getMyAllPost,
  getUserPosts,
} = require("../controllers/user");
const { isAuthenticated } = require("../middleware/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logOut);

router.route("/follow/:id").get(isAuthenticated, UserFollow);

router.route("/update/password").put(isAuthenticated, updatePassword);

router.route("/update/profile").put(isAuthenticated, updateProfile);

router.route("/delete/me").delete(isAuthenticated, deleteMyProfile);

router.route("/myProfile").get(isAuthenticated, myProfile);

router.route("/my/post").get(isAuthenticated, getMyAllPost);

router.route("/user/:id").get(isAuthenticated, getUserProfile);

router.route("/userpost/:id").get(isAuthenticated, getUserPosts);

router.route("/users").get(isAuthenticated, getAllUsers);

router.route("/forgot/password").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

module.exports = router;
