const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000


// middleware
app.use(express.json())
app.use(cors());


app.get('/',async(req,res)=>{
    res.send('Boss is running')
})

app.listen(port,()=>{
    console.log(`Boss is running on port ${port}`)
})