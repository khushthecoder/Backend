const express = require('express');
const app = express();
const port =process.env.PORT || 3000
import dotenv from 'dotenv/config.js'
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get("/", (req, res) => {
    return res.send("hello from express");
});
app.listen(port,()=>{
    console.log(`server started at port no. ${port}`);
})


//route file import karna hai
import router from './routes/index.js'
app.use(router)