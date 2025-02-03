import express from 'express';
import router from './routes/index.js';
const app = express();
//version1

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(router)

app.listen(3000,()=>{
    console.log("l on port 3000");
    
})
