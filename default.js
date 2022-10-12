const Product = require('./model/productScema')
const products = require('./constants/data')

const DefaultData = async () => {
    try {
        await Product.insertMany(products);
        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ' , error.message);
    }
}

module.exports = DefaultData