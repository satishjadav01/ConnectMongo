const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req, body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get ("/",async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message:"faild to fetch users"})
  }
});


router.get("/:id", async (req,res)=>{
    try {
        const user = User.findById(req.params.id);

        if(!user){
            return res.status(404).json({message : "user not found "})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message:"User Not Found"})
    }
});

module.exports = router;
