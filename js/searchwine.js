function search(a){
        var t;    
        if (a===1){
         var gr = document.getElementById("Grape1").value;
         count=0;
        }
        if (a===2){
          var gr = document.getElementById("Grape2").value;
        }
        if (a===3){
          var gr = document.getElementById("Grape3").value;	

        }
        if (a===4){
          //var gr=document.getElementsByName("Grape4").value;
          var gr=document.querySelector('input[name="Grape4"]:checked').value          
        }
        if (a===5){
        	var gr = document.getElementById("Grape5").value;	

        }
        switch(gr){
          case "Chardonnay" :            
            alert("Good Answer")
            t=true
            break;

          case "Syrah" : 
            alert("Good Answer")
            t=true
            break;
          case "Merlot" : 
            alert("Good Answer")
            t=true
            break;
          case "Savignon" : 
            alert("Good Answer")
            t=true
            break;
          case "Pinot" : 
            alert("Good Answer")
            t=true
            break;
          default :
            alert("Sorry, Wrong Answer Try Again");
            t=false;
        


        }
         if (t===true){
         	count++;
         	ab=count;
         }else if (count!=0){
                    ab=count;     
         }
        document.getElementById("cont").innerHTML = ("Your Score is  "+ ab +  " points");
        if (count===5){
            document.getElementById("cont").innerHTML = ("Congratulations "+ ab +  " points You are  the Master");
        }  
