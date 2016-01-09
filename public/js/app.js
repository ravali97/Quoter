var parseID = "850cXQdpNa05SmFAwiKxnlhwkdgiMxYAAifnKVfS";
var parseRestKey = "eFRA64KgUELTAVKZRCneeRHABhSCBhQLzMPdGn4F";
$(document).ready(function() {
    


    $("#send").on("click", function() {
         
        
        $.ajax({
            url: 'https://api.parse.com/1/classes/quoterMainData',
            headers: {
                'X-Parse-Application-Id': parseID,
                'X-Parse-REST-API-Key': parseRestKey
            },
            contentType: 'application/json',
            dataType: 'json',
            processData: true,
            data: JSON.stringify({
                'quote': $("#quote").val(),
                'name': $("#name").val()

            }),
            type: 'POST',
            success: function(data) {
                console.log(data);
                 $("#message").append("Quote has been entered");
                

            },
            error: function() {
                console.log('error');
            }


        });

    });

});



