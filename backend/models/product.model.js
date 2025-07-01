import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true
    },

    image:{
        type: String,
        required: true
    },
}, {
    timestamps: true //updatedAt
});

const Product = mongoose.model('Product' , productSchema);
//Mongoose will change Product to products

export default Product;