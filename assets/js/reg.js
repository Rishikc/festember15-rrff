function emailmatch(){
	if(email1.value!=email2.value)
		confirmemail.innerHTML="email dosn't match ";
	else
		confirmemail.innerHTML="<i class='fa fa-check-circle'></i>";

}


$('form#data').submit(function(){

	var formData = new FormData($(this)[0]);
	$.ajax({
        url: "register.php",
        type: 'POST',
        data: formData,
        async: false,
        success: function (data) {
            alert(data);
            console.log("ss");
            console.log(data);
        },
        cache: false,
        contentType: false,
        processData: false
    });

    return false;
});