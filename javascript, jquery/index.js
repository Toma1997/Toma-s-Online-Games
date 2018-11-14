
window.onload = function() {

	if (document.cookie == ''){

		document.getElementById('linkBrick').onclick = function(){
					alert("REGISTER BELOW!");
					return false;
						
				};
						
				document.getElementById('linkRpS').onclick = function(){
					alert("REGISTER BELOW!");
					return false;

				};

	} else {
		var niz = document.cookie.split(';');

		if (niz.length > 1){

			document.getElementById('register').style.display = 'none';
		
		} else {
					
			document.getElementById('linkBrick').onclick = function(){
				alert("REGISTER BELOW!");
				return false;
			
			};
							
			document.getElementById('linkRpS').onclick = function(){
				alert("REGISTER BELOW!");
				return false;
				
			};
						
		};
		
	};

};




