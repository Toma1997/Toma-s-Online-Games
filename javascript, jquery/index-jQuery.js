
$(document).ready(function(){
	$("#rock-paper-scissors").css({'opacity':'0.4'});
   $("#rock-paper-scissors").hoverIntent(function() {
    $(this).fadeTo(100,1);
    $(this).css('box-shadow','4px 4px 8px black, 0 0 50px #E0DDCF, 0 0 5px #2D232E');
  }, function() {
    $(this).fadeTo('slow',0.4);
    $(this).css('box-shadow','none');
  });
   

   $("#brick-breaker").css({'opacity':'0.4'});
   $("#brick-breaker").hoverIntent(function() {
    $(this).fadeTo(100,1);
    $(this).css('box-shadow','4px 4px 8px black, 0 0 50px #E0DDCF, 0 0 5px #2D232E');
  }, function() {
    $(this).fadeTo('slow',0.4);
    $(this).css('box-shadow','none');
  });

  
  $('nav')
    .effect('shake', {times:10}, 1000)
    .effect('highlight', {}, 10000)
    .hide('explode', {}, 5000 );  

});
 
