const mongoose=require('mongoose');


const conncectDatabase=()=>{
mongoose.connect(process.env.DB_URL,{
    
}).then(con=>{
    console.log(`MongoDB host:${con.connection.host}`); 
})
}

module.exports=conncectDatabase;