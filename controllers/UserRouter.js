const express = require("express");
const UserModel = require("../models/UserSchema");
const bcrypyjs = require("bcryptjs");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot GET");
  }
});

// render a sign up form
router.get('/signup', (req,res) => {
  res.render('Users/Signup')
})

// Create New User
router.post("/signup", async (req, res) => {
  try {
    // check if user exist
    const userAlreadyExist = await UserModel.find({ email: req.body.email });

    // if there is a object inside of the array
    if (userAlreadyExist[0]) {
      return res.send("User Already exist!");
    }
    
    // Create a new user
    const SALT = await bcrypyjs.genSalt(10); // how secure your hash will be
    // re-assign the password to the hashed password
    req.body.password = await bcrypyjs.hash(req.body.password, SALT);
    const user = await UserModel.create(req.body);
    res.redirect('/user/signin');
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot POST");
  }
});

// Signup form
 router.get("/signup", (req, res) => {
   res.render("Users/Signup");
 });

 // Signin form
 router.get("/signin", (req, res) => {
   res.render("Users/Signin");
 });

 // Signin User
  router.post("/signin", async (req, res) => {
    try {
     // find user by email in db
     const user = await UserModel.findOne({ email: req.body.email });
     // if No user is found
     if (!user) return res.send("Please check your email and password!")
     // decode password
     const decodedPassword = await bcrypyjs.compare(req.body.password, user.password
     );
     // password not a match
     if (!decodedPassword) return res.send("Please check your email and password!")
     // set the user session
     // create the new username in the session obj using the user info from db
     req.session.username = user.username
     req.session.loggedIn = true
    // redirect to /blogs
     res.redirect('/blog')
   } catch (error) {
     console.log(error);
     res.status(403).send(error)
   }
 });

// signout user an destroy cookies
router.get('/signout', (req, res) => {
  try {
    req.session.destroy()
     res.redirect('/')
  } catch (error) {
    console.log(error);
  }
})

// Find user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot GET user by id");
  }
});

// PUT update a user
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" }
    );
    res.send(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot PUT user by id");
  }
});

// Delete user
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndRemove(req.params.id);
    res.send(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot DELETE user by id");
  }
});

module.exports = router;