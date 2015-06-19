
$('form#data').submit(function(){

    var formData = new FormData($(this)[0]);
    $.ajax({
        url: "submit.php",
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