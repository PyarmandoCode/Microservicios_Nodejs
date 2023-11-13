const express=require('express');
const app = express();
const port=3002;

app.use(express.json());

const products = [
    {id:1,name:"Movie1"},
    {id:2,name:"Movie2"},
    {id:3,name:"Movie3"},
];

app.get('/api/products',(req,res)=> {
    res.json(products);
});
app.listen(port,()=> {
   console.log(`servicio de usuario en http://localhost:${port}`)
});

