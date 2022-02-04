const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
name:{
    type:String,
    required:[true,'Please Enter Product Name'],
    trim: true, //remove the blank white space
    maxlength:[100,'Product cannot exceed 100 character'],
},
price:{
    type:Number,
    required:[true,'Please Enter Product price'],
   
    maxlength:[5,'Product cannot exceed 100 character'],
    default:0.0,
},
description:{
    type:String,
    required:[true,'Please Enter Product description '],
    
},
ratings:{
    type:Number,
    required:[true,'Please Enter Product description '],
    
},
images:[
    {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
],
category:{
    type:String,
    required:true,
    enum:{
        values:[
            'Electronics',
            'Camera',
            'Laptop',
            'Bags',
            'Smartphone',
            'Shoes',
            'Watches',
            'Headphone'
        ]
    },
    message:'Please Select correct Category'
},
seller:{
    type:String,
    required:true
},
stock:{
    type:Number,
    required:true
},
numOfReviews:{
    type:Number,
    default:0
},
reviews:[
    {
        user:{
            type:mongoose.Schema.ObjectId,
            ref:'user',
            required:true
        },
        name:{
            type:String,

        },
        rating:{
            type:Number,
            required:true 
        },
        comment:{
            type:String,
            required:true,
        }

    }
],


createdAt:{
    type:Date,
    default:Date.now
}

})

module.exports=mongoose.model('Product',productSchema);