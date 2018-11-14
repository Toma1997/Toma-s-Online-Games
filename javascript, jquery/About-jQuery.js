
$(document).ready(function(){
	$('#invisible').css({'display':'none'});
  $('#more-less').click(function(){
    var onToggleFinished = function() {
        if($('#invisible').is(':visible')) {
            $('#more-less').val('Read less');
        } else {
            $('#more-less').val('Read more');
        }
    };


    $('#invisible').toggle('slow', onToggleFinished);
    
    
  });

  $("#mobilepic").css({'opacity':'0.6'});


   $("#mobilepic").hoverIntent(function() {
    $(this).fadeTo(100,1);
    $(this).css('box-shadow','1px 1px 2px black, 0 0 25px #E0DDCF, 0 0 5px #2D232E');
  }, function() {
    $(this).fadeTo('slow',0.6);
    $(this).css('box-shadow','5px 5px 10px blue');
  });
});



