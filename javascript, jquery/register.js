
		function crvenaBoja(){
				document.getElementById('name').style.color = "red";
				document.getElementById('addr').style.color = "red";
				document.getElementById('cityy').style.color = "red";
				document.getElementById('State').style.color = "red";
				document.getElementById('DtPhone').style.color = "red";
				document.getElementById('Email').style.color = "red";
				document.getElementById('confEmail').style.color = "red";
				
				Inicijalni.style.color = "red";
				Inicijalni.innerHTML = "<span id='uzvik'>!</span> Please enter your information below.";
				document.getElementById("submit").disabled = true;
			}

			
			function provera(){
					 podaci = new Array();

					var imePrezime = document.getElementById('fullname');
					var imePrezimeT = document.getElementById('name');
					var regImePrezime = /^[A-Z][a-z]{0,}\s[A-Z][a-z]{0,}$/;
					var regImePrezime1 = /^[A-Z][a-z]{0,}\s[A-Z][a-z]{0,}\s[A-Z][a-z]{0,}$/;
					var regImePrezime2 = /^[A-Z][a-z]{0,}\s[A-Z][a-z]{0,}\s[A-Z][a-z]{0,}\s[A-Z][a-z]{0,}$/;

				if (!regImePrezime.test(imePrezime.value) && !regImePrezime1.test(imePrezime.value) && !regImePrezime2.test(imePrezime.value)) {
						imePrezimeT.style.color = "red";

				} else {
						imePrezimeT.style.color = "black";
						podaci.push(imePrezime.value);
					}
				
					var adresa = document.getElementById('address');
					var adresaT = document.getElementById('addr');
					var regAdresa = /^[A-Z](\w+)\s(\d+)$/;
					var regAdresa1 = /^[A-Z](\w+)\s[A-Z](\w+)\s(\d+)$/;
					var regAdresa2 = /^[A-Z](\w+)\s[A-Z](\w+)\s[A-Z](\w+)\s(\d+)$/;
					var regAdresa3 = /^[A-Z](\w+)\s[A-Z](\w+)\s[A-Z](\w+)\s[A-Z](\w+)\s(\d+)$/;

				if (!regAdresa.test(adresa.value) && !regAdresa1.test(adresa.value) && !regAdresa2.test(adresa.value) && !regAdresa3.test(adresa.value)) {
						adresaT.style.color = "red";

				} else {
						adresaT.style.color = "black";
						podaci.push(adresa.value);
					}
				

				
					var grad = document.getElementById('city');
					var gradT = document.getElementById('cityy');
					var regGrad = /^[A-Z][a-z]{0,}$/;
					var regGrad1 = /^[A-Z][a-z]{0,}\s[A-Z][a-z]{0,}$/;
					var regGrad2 = /^[A-Z][a-z]{0,}\s[A-Z][a-z]{0,}\s[A-Z][a-z]{0,}$/;
					var regGrad3 = /^[A-Z][a-z]{0,}\s[A-Z][a-z]{0,}\s[A-Z][a-z]{0,}\s[A-Z][a-z]{0,}$/;

				if (!regGrad.test(grad.value) && !regGrad1.test(grad.value) && !regGrad2.test(grad.value) && !regGrad3.test(grad.value)) {
						gradT.style.color = "red";

				} else {
						gradT.style.color = "black";
						podaci.push(grad.value);
					}
				
					var dtphone = document.getElementById('dtPhone');
					var dtPhoneT = document.getElementById('DtPhone');
					var regdtPhone = /^\+(381)(6)[\d]{6,}$/;

				if (!regdtPhone.test(dtphone.value)) {
						dtPhoneT.style.color = "red";

				} else {
						dtPhoneT.style.color = "black";
						podaci.push(dtphone.value);
					}
				

			
					var email = document.getElementById('email');
					var emailT = document.getElementById('Email');
					var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

				if (!regEmail.test(email.value)) {
						emailT.style.color = "red";

				} else {
						emailT.style.color = "black";
					}

					var confemail = document.getElementById('confemail');
					var confemailT = document.getElementById('confEmail');

				if (confemail.value != email.value) {
						confemailT.style.color = "red";
				} else if (email.value == "") {
						confemailT.style.color = "red";
				} else {
						confemailT.style.color = "black";
						podaci.push(confemail.value);
					}
				

				
					var select = document.getElementById('selection');
					var state = document.getElementById('State');

				if ( select.value == "0") {
						state.style.color = "red";
				} else {
						state.style.color = "black";
						podaci.push(select.value);
					}

				if (podaci.length == 6) {
					Inicijalni.innerHTML = "";
					document.getElementById("submit").disabled = false;
					
					return true;
					
					} else {
						return false;
					}
			}
        
        function submit(){

        		if (provera = true){
	            	var sendData = "mailto:inbox@TomasOnlineGames.com?subject=Database&body=Name: "+ podaci[0] +"%0D%0A"+"Address: "+ podaci[1] +"%0D%0A"+'City: '+ podaci[2] +"%0D%0A"+'Phone: '+ podaci[3] +"%0D%0A"+'Mail: '+ podaci[4] +"%0D%0A"+'State: '+ podaci[5]; 
					window.location.href = sendData;

	                ckName = podaci[0];
	                var ckMail = podaci[4];
	                var ckDtPhone = podaci[3];
	                var expireDate = new Date();
	                expireDate.setMonth(expireDate.getMonth() + 1);
	                document.cookie = "CookieName" +"="+ckName +'&'+ckMail+'&'+ckDtPhone+"; expires=" + expireDate.toGMTString();  
            }
        }
        


        function cookie(){
        	if (document.cookie == ''){}
			else {
				var niz = document.cookie.split(';');
				for (var i=0;i<niz.length;i++){
					var cookieName = niz[i].split(';')[0].split('=')[0];
					if (cookieName== "CookieName"){
						var valueC = niz[i].split(';')[0].split('=')[1];
						var nameC = valueC.split('&')[0];
						var mailC = valueC.split('&')[1];
						var phoneC = valueC.split('&')[2];
						document.getElementById('fullname').value = nameC;
						document.getElementById('email').value = mailC;
						document.getElementById('dtPhone').value = phoneC;
					};
				};
			};
		};
        