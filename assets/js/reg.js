function sendReg() {
	console.log(document.getElementById('email').value);
	$.ajax({
		type: "POST",
		//dataType: "jsonp",
		data: {'email': document.getElementById('email').value },
		url: "https://festember.com/reels/reg.php",
		success: function(data) {
			alert("Success");
		},
		error: function(data){
		    alert(data);
		    console.log(data);
		}
	});
}
