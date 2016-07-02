$(document).ready(function(){
   $.get( "http://localhost:3000/active_users", function( data ) {
  $( ".result" ).html( data );
  var div = $('.names')
  data.forEach(name=> {
    var p = document.createElement('p')
    var num = name.user_data.id
    $(p).html(`<p><a href="http://localhost:3000/users/${num}">${name.user_data.first_name}</a> ${name.user_data.last_name}</p>`)
    div.append(p)
  })

 });
})
