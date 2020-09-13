const express = require('express')
const path = require('path')
const {Pool} = require('pg')
const axios = require('axios');


//Controllers
const ProductController = require('./controllers/getProducts.js');

const PORT = process.env.PORT || 5000
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

const connectionString = process.env.DATABASE_URL || 'postgres://aekyixapmzfhvg:66b98f4878b23dd6e133b5515e2c3fc27b4ad17fa4b2c8ec9a8be8ca7725ed8b@ec2-35-172-73-125.compute-1.amazonaws.com:5432/det1gl7rk0svq7?ssl=true';
const pool = new Pool({connectionString: connectionString});


express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({extended:true}))//support url encoded bodies
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index')) 
  .get('/products', ProductController.getProducts) //Returns JSON
  .post('/maxPrice',ProductController.maxPrice)
  .get('/home',(req,res) => res.render("pages/home")) 
  .get('/dart',(req,res) => res.render("pages/dart"))
  .get('/getCard',(req,res) => {


  /************************************************
   * API Example using Axios
   * API: https://scryfall.com/docs/api/cards/random
   ************************************************ */  
  axios.get('https://api.scryfall.com/cards/random')
  .then(response => {
    console.log('This:')
    console.log(response.data.image_uris.png)
    res.status(200).json(response.data.image_uris.png)
  })
  .catch(error => {
    console.log(error);
  });
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))









  