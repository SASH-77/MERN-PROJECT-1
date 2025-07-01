//const express = require('express')

import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import Product from "./Models/product.model.js";


dotenv.config();

const app = express();

app.use(express.json()); //Allows us to accept JSON data in the req.body

app.get('/', (req, res) => {
  res.send('API is running...');
});


app.post('/api/products', async (req, res) => {
    const product=req.body;

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});
    } catch (error) {
        console.error("Error in making product:", error.message);
        res.status(500).json({ success: false, message: "Server error" })
    }
});

 

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000")
});

it 