$(function(){
  $('#btn-add').on('click', function(){
      //Define the variable 
      var Grape = $('select[name="Grape"]').val();
      var Color = $('select[name="Color"]').val();
      var Acidity = $('select[name="Acidity"]').val();
      var Body = $('select[name="Body"]').val();
      var Tannic = $('select[name="Tannic"]').val();      
      var tr = '<tr><td>'+ Grape +'</td><td>'+ Color +'</td><td>'+ Acidity +'</td><td>'+ Body +'</td><td>'+ Tannic +'</td><tr>';
      // Append the rows in the table
      $('tbody').append(tr);
      stor(Grape);
                             
  });
});
     