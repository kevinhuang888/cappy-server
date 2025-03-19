const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        goalList:[]
    },
    {timestamps:true}
)

module.exports = mongoose.model("Category",CategorySchema)