const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const categoryRoute = require('./routes/category')
const goalRoute = require('./routes/goal')

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("Connection to Mongo Successful"))
        .catch((err) => {
            console.log(err)
        })

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',  // Allow requests from your React frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow specific HTTP methods (optional)
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allow specific headers (optional)
  }));


app.use("/category",categoryRoute)
app.use("/goal",goalRoute)


app.listen(5002, () => {
    console.log("Backend server is running!")
})