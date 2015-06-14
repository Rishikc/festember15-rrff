function sendReg() {

if (document.getElementById('email1').value != "" && document.getElementById('email1').value == document.getElementById('email2').value){

           var name = $('input[name=name]').val();
           var email1= $('input[name=email1]').val();
           var mobile= $('input[name=mobile]').val();
           var coll=$('input[name=coll]').val();
           var acc_no= $('select[name=acc_no]').val();
           var acc_name= $('textarea[name=acc_name]').val();
           var bank= $('textarea[name=bank]').val();
           var receipt= $('input[name=receipt]')[0].files[0];

           var dataString = 'name='+ name + '&email1='+ email + '&mobile='+ mobile + '&coll='+ coll + '&acc_no'+ acc_no + '&acc_name=' + acc_name+ '&bank=' + bank + '&receipt=' + receipt;
	                  
	alert('hello');
	$.ajax({
		type: "POST",
		data: dataString,
	//	dataType: "json",
		url: "localhost/xampp/festember15-rrff/register.php",
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

function emailmatch(){
	if(email1.value!=email2.value)
		confirmemail.innerHTML="email dosn't match ";
	else
		confirmemail.innerHTML="<i class='fa fa-check-circle'></i>";

}
