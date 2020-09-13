
function generateTable()
    {
      console.log('creating table');
      
             statistics = "";
             statistics += "<table class='table table-hover table-bordered table-striped'>";
             statistics += "<tr><th>statistics Name</th><th>Description</th><th>Stats</th></tr>";
            
          for(var i = 0; i < 5 ; i++){
            
            statistics += "<tr>";
            statistics += "<td>"+ "testDATA1" +"</td>";
            statistics += "<td>"+ "testDATA1" + "</td>";
            statistics += "<td>" + "15.22" + "</td>";
            statistics += "</tr>";

          }// END LOOP
           
            statistics += "</table>";
        //added end
          result = "";
          result = statistics;
          //select status id element display in html
          $('#results').html(result);
        }//sucess data call