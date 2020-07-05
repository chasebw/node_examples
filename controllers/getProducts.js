const {Pool} = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://aekyixapmzfhvg:66b98f4878b23dd6e133b5515e2c3fc27b4ad17fa4b2c8ec9a8be8ca7725ed8b@ec2-35-172-73-125.compute-1.amazonaws.com:5432/det1gl7rk0svq7?ssl=true';
const pool = new Pool({connectionString: connectionString});


function getProducts(request,response){
    console.log("running")

    getProductsQuery(function(error,result){
      if (error || result == null || result.length == 0){
        response.status(500).json({success:false, data:error});
        console.log("Error")
      } else {
        const products = result;
        console.log(products)
        params = result; //chance to remove [0]
        response.status(200).json(products);
        //response.render('pages/browse', params);
      }
    });
  } //END get_store_items


  function getProductsQuery(callback){
    console.log("Getting all items from DB");
    const sql = "SELECT * from product";
    pool.query(sql, function(err,result){
      if (err){
        console.log("Error in query: ");
        console.log(err);
        callback(err,null);
      }
    console.log("Found result: " + JSON.stringify(result.rows));
    callback(null,result.rows);
  });
} //ENDOF grab_from_db


function maxPrice(request,response){
  console.log("running")

  const price = parseFloat(request.body.price);

  maxPriceQuery(price,function(error,result){
    if (error || result == null || result.length == 0){
      response.status(500).json({success:false, data:error});
      console.log("Error")
    } else {
      const products = result;
      console.log(products)
      params = result; //chance to remove [0]
      response.status(200).json(products);
      //response.render('pages/browse', params);
    }
  });
} //END get_store_items


function maxPriceQuery(price,callback){
  console.log("Getting all items from DB");

  const sql = 'SELECT * from product WHERE price < $1::int ORDER BY price';

  console.log(price);

  params = [price];

  pool.query(sql,params, function(err,result){
    if (err){
      console.log("Error in query: ");
      console.log(err);
      callback(err,null);
    }
  console.log("Found result: " + JSON.stringify(result.rows));
  callback(null,result.rows);
});
} //ENDOF grab_from_db



module.exports = {
    maxPrice: maxPrice,
    maxPriceQuery:maxPriceQuery,
    getProducts: getProducts,
    getProductsQuery: getProductsQuery
};