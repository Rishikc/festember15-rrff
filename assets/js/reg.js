function sendReg() {
	console.log(document.getElementById('email').value);
	$.ajax({
		type: "POST",
		dataType: "jsonp",
		data: {'email': document.getElementById('email').value },
		url: "http://festember.com/reg/reg.php",
		success: function(data) {
			alert("Success");
		},
		error: function(data){
			alert();
			console.log("failed to call /snr/getHubsInCity api");
		}
	});
}