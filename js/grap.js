$(function(){
  $('#btn-add').on('click', function(){
      // Define the variable
      var Grape = $('input[name="Grape"]').val();
      var Color = $('input[name="Color"]').val();
      var Acidity = $('input[name="Acidity"]').val();
      var Body = $('input[name="Body"]').val();
      var Tannic = $('input[name="Tannic"]').val();
      var tr = '<tr><td>'+ Grape +'</td><td>'+ Color +'</td><td>'+ Acidity +'</td><td>'+ Body +'</td><td>'+ Tannic +'</td><tr>';
      // Append the rows in the table
      $('tbody').append(tr);
    });
});