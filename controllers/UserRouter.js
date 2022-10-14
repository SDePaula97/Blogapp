const express = require('express');
const userModel = require('../models/UserSchema');

const router = express.Router();

// GET: all users
router.get('/', async (req, res) => {
    try {
        const users = await userModel.find({})
        res.render('users/users')
    } 
    catch (error) {
        console.log(error);
        res.status(403).send('Cannot create');
    }
});

// GET : user by ID
router.get('/:id', async (req, res) => {
    try {
        const users = await userModel.findById(req.params.id)
        res.send(users)
    } 
    catch (error) {
        console.log(error);
        res.status(403).send('Cannot create');
    }
});
// POST : create a new user
router.post("/", async (req, res) => {
    try {
        // Check if user exists
        const userAlreadyExist = await userModel.find({ email: req.body.email });
        //const userNameExists = await UserModel.find({username: req.body.username})
        
        // if there is an object inside of the array
        if (userAlreadyExist[0]) {
            return res.send("User Already Exists!");
        }
     // Create a new user   
    const user = await userModel.create(req.body);
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot POST');
        
    }
});
 
// PUT: update by user
router.put('/:id', async (req,res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument': "after"})
        res.send(updatedUser)
    } 
    catch (error) {
        console.log(error);
        res.status(403).send('Cannot put')
}
});

// // DELETE : Remove by ID
router.delete('/:id', async (req,res) => {
    try {
      const deletedUser =  await userModel.findByIdAndRemove(req.params.id)
      console.log(deletedUser)
      res.send('User Deleted')
    } 
    catch (error) {
        console.log(error);
        res.status(403).send('Cannot DELETE user by id')
    }
})
module.exports = router;