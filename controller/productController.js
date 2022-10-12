
const Product = require('../model/productScema')

const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {
           console.log(error);
    }
}

const getProductById  = async (req,res) => {
   try {

    const id = req.params.id;
    const product = await Product.findOne({ 'id': id })

    res.status(200).json(product)
    
   } catch (error) {
       res.status(500).json({ message: error.message })
   }
}

module.exports = {
    getProducts,
    getProductById
}