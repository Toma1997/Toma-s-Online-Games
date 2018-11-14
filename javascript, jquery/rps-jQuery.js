$(document).ready(function(){

	$("#Paper").css({'opacity':'0.4'});
   $("#Paper").hoverIntent(function() {
    $(this).fadeTo(100,1);
    $(this).css('box-shadow','4px 4px 8px black, 0 0 50px #E0DDCF, 0 0 5px #2D232E');
  }, function() {
    $(this).fadeTo('slow',0.4);
    $(this).css('box-shadow','none');
  });
   

   $("#Rock").css({'opacity':'0.4'});
   $("#Rock").hoverIntent(function() {
    $(this).fadeTo(100,1);
    $(this).css('box-shadow','4px 4px 8px black, 0 0 50px #E0DDCF, 0 0 5px #2D232E');
  }, function() {
    $(this).fadeTo('slow',0.4);
    $(this).css('box-shadow','none');
  });

   $("#Scissors").css({'opacity':'0.4'});
   $("#Scissors").hoverIntent(function() {
    $(this).fadeTo(100,1);
    $(this).css('box-shadow','4px 4px 8px black, 0 0 50px #E0DDCF, 0 0 5px #2D232E');
  }, function() {
    $(this).fadeTo('slow',0.4);
    $(this).css('box-shadow','none');
  });

   $("#New_game").css({'opacity':'0.4'});
   $("#New_game").hoverIntent(function() {
    $(this).fadeTo(100,1);
    $(this).css('box-shadow','4px 4px 8px black, 0 0 50px #E0DDCF, 0 0 5px #2D232E');
  }, function() {
    $(this).fadeTo('slow',0.4);
    $(this).css('box-shadow','none');
  });
});