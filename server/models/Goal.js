const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema(
    {
        content:{type:String,required:true},
        stars:{type:Number,required:true},
        repeat:{type:Boolean,required:true}
    },
    { timestamps: true }
)


module.exports = mongoose.model("Goal",GoalSchema)