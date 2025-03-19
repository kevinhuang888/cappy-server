const Category = require('../models/Category')
const router = require('express').Router()

router.post("/", async (req,res) => {
    const newCategory = new Category(req.body)

    try{
        const savedCategory = await newCategory.save()
        res.status(200).json(savedCategory)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put("/:id", async (req,res) => {
    try{
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new:true }
        )
        res.status(200).json(updatedCategory)
    } catch(err) {
        res.status(500).json(err)
    }
}) 

router.get("/", async (req,res) => {
    try{
        const categories = await Category.find()
        res.status(200).json(categories)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router