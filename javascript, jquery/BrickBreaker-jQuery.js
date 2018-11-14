$(document).ready(function(){

	
	$("#start_game").css({'opacity':'0.6'});


   $("#start_game").hoverIntent(function() {
    $(this).fadeTo(100,1);
    $(this).css('box-shadow','1px 1px 2px black, 0 0 25px #E0DDCF, 0 0 5px #2D232E');
  }, function() {
    $(this).fadeTo('slow',0.6);
    $(this).css('box-shadow','5px 5px 10px blue');
  });

   $("#reset_game").css({'opacity':'0.6'});


   $("#reset_game").hoverIntent(function() {
    $(this).fadeTo(100,1);
    $(this).css('box-shadow','1px 1px 2px black, 0 0 25px #E0DDCF, 0 0 5px #2D232E');
  }, function() {
    $(this).fadeTo('slow',0.6);
    $(this).css('box-shadow','5px 5px 10px blue');
  });

});