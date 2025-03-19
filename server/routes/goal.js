const Goal = require('../models/Goal')
const router = require('express').Router()

router.post("/", async (req,res) => {
    const newGoal = new Goal(req.body)
    try{
        const savedGoal = await newGoal.save()
        res.status(200).json(savedGoal)
    } catch(err) {
        res.status(500).json(err)
    }
})



module.exports = router