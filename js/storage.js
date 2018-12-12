
  function stor(gr){
  var element =  [
      {   grap: "Chardonnay",country: "France",variety: "White" ,description: "Mineralized",matching: "Fish  Chicken"},
                                      
      {   grap:"Savignon Blanck",country:"France",variety:"White",description :"Mineralized",matching:"Fish, Fruit, Chicken"},
      {   grap:"Syrah",country:"France, Australia",variety:"Red",description:"The wine full body ",matching:"Meat"},
      {   grap:"Bordeaux", country:"France", variety:"Red",description:"The wine medium body",matching:"Meat, Cheese"},
      { grap:"Savignon",country:"France",variety:"Red",description:"The wine with medium body",matching:"Meat, Cheese"}
            ];
            // describe the array of objects wine 
           
             
             var i;
             var text= "";
             for (i= 0; i< 5; i++){
                if (gr== element[i].grap){
                  text += element[i].grap+"<br>"+ element[i].country+"<br>" + element[i].variety+"<br>"+element[i].description+"<br>"+element[i].matching+"<br>"
               
               } 
             }
             document.getElementById("demo1").innerHTML = text;
                          

};
