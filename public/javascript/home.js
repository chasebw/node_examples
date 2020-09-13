
/****************************
 * Query Database AJAX Request
 ****************************/
function generateTable()
    {
      console.log('checkout run');
      
      $.ajax({
        url: '/products',
        type: 'GET',
        dataType: 'json', //will parse json into javascript object
        //callback called when suceed
        success: (data) => {
          console.log('ajax success!', data);
             product = "";
             product += "<table class='table table-hover table-bordered table-striped'>";
             product += "<tr><th>Product Name</th><th>Description</th><th>Price</th></tr>";
            
          $.each(data, function (index, value) {
            
            
            product += "<tr>";
            product += "<td>"+ this.product_name +"</td>";
            product += "<td>"+ this.product_description + "</td>";
            product += "<td>" + "$" + this.price+ "</td>";
            product += "</tr>";
          });// END LOOP
           
            product += "</table>";
        //added end
          result = "";
          result = product;
          //select status id element display in html
          $('#results').html(result);
        }//sucess data call
      });//ajax function call
      //CART CLICK AJAX END
    }//cartPopup on click

/****************************
 * Query Database AJAX Request - Pass Data
 ****************************/
function maxPrice()
{
  console.log('maxPrice() run');
  
  data = {};
  const priceName = $('#price').attr('name');
  const priceValue = $('#price').val();
  data[priceName] = priceValue;
  
  $.ajax({
    url: '/maxPrice',
    type: 'POST',
    dataType: 'json', //will parse json into javascript object
    data:data,
    //callback called when suceed
    success: (data) => {
      console.log('ajax success!', data);
         product = "";
         product += "<table class='table table-hover'>";
         product += "<tr><th>Product Name</th><th>Description</th><th>Price</th></tr>";
        
      $.each(data, function (index, value) {
        
        
        product += "<tr>";
        product += "<td>"+ this.product_name +"</td>";
        product += "<td>"+ this.product_description + "</td>";
        product += "<td>" + "$" + this.price+ "</td>";
        product += "</tr>";
      });// END LOOP
       
        product += "</table>";
    //added end
      result = "";
      result = product;
      //select status id element display in html
      $('#results').html(result);
    }//sucess data call
  });//ajax function call
  //CART CLICK AJAX END
}//cartPopup on click




    //Erase 
    function erase(){

        result = "";
        $('#results').html(result);
    }


/***************************** 
API Ajax Request
*******************************/

    function randomCard()
    {
      console.log('Grab Card');
      
      $.ajax({
        url: '/getCard',
        type: 'GET',
        dataType: 'json', //will parse json into javascript object
        //callback called when suceed
        success: (data) => {
          console.log('ajax success!', data);

          newhtml = "";
          image = data;


          newhtml += "<img src='" +  image  + "' alt='Card'>"   + "</img>";
        

           
          $('#results').html(newhtml);
        }//sucess data call
      });//ajax function call
      //CART CLICK AJAX END
    }//cartPopup on click


    function removeCard(){

      result = "";
        $('#results').html(result);
    }
