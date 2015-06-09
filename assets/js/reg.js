function sendReg() {
if (document.getElementById('email').value != ""){	
	$.ajax({
		type: "POST",
		//dataType: "jsonp",
		data: {'email': document.getElementById('email').value },
		url: "https://festember.com/filmreels/reg.php",
		success: function(data) {
			document.getElementById('form-button').innerHTML = "<i class='fa fa-check-circle'></i>";
		},
		error: function(data){
		    //alert(data);
			document.getElementById('form-button').innerHTML = "<i class='fa fa-check-close'></i>";
		    console.log(data);
		}
	});
}
}
