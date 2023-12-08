const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const Transaction  = require('./models/Transaction')
const { default: mongoose } = require('mongoose')

app.use(cors())
app.use(express.json())

app.post('https://moneyapi-emxw.vercel.app/api/transaction', async(req,res)=>{
    // console.log(process.env.MONGO_URL)
    await mongoose.connect('mongodb+srv://kharelpawannp:hktH4d3pJ9JxI35f@cluster0.g2ggnyb.mongodb.net/?retryWrites=true&w=majority');
    const {price, name, description, datetime}= req.body;
    const transaction = await Transaction.create({price, name,description,datetime})
    res.json(transaction)
})

app.get('https://moneyapi-emxw.vercel.app/api/transactions', async(req,res)=>{
    await mongoose.connect('mongodb+srv://kharelpawannp:hktH4d3pJ9JxI35f@cluster0.g2ggnyb.mongodb.net/?retryWrites=true&w=majority')
    const transactions = await Transaction.find();
    res.json(transactions)
})
app.listen('https://moneyapi-3pre.vercel.app')
