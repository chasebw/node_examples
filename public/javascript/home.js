
/****************************
 * Query Database AJAX Request
 ****************************/
function grab_products()
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
             product = "<table>";
            
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
          $('#table').html(result);
        }//sucess data call
      });//ajax function call
      //CART CLICK AJAX END
    }//cartPopup on click

    
    //Erase 
    function erase(){

        result = "";
        $('#table').html(result);
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
        

           
          $('#picture').html(newhtml);
        }//sucess data call
      });//ajax function call
      //CART CLICK AJAX END
    }//cartPopup on click


    function removeCard(){

      result = "";
        $('#picture').html(result);
    }
