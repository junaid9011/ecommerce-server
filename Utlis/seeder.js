/// this file will insert and delete all product from database
const Product=require('../Models/Product');
const dotenv=require('dotenv');
const conncectDatabase=require('../config/database');

const products=require('../Data/Product.json');
dotenv.config({path:'F:\\WD\\Ecommerce\\Backend\\config\\config.env'});

conncectDatabase();

const seedProduct=async()=>{
    try{
        await Product.deleteMany();
        
        await Product.insertMany(products);
        

        process.exit();

    }catch(err){
        console.log(err.message)
    }
}
seedProduct();