$(document).ready(function() {
    var parseID = "850cXQdpNa05SmFAwiKxnlhwkdgiMxYAAifnKVfS";
    var parseRestKey = "eFRA64KgUELTAVKZRCneeRHABhSCBhQLzMPdGn4F";
    $.ajax({

        type: 'GET',
        url: 'https://api.parse.com/1/classes/quoterMainData',
        headers: {
            'X-Parse-Application-Id': parseID,
            'X-Parse-REST-API-Key': parseRestKey
        },
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            console.log("displaying quotes", response);
            displayQuotes(response);

        },
        error: function() {
            console.log("error");
        }




    });

    function displayQuotes(message) {
        var item = $("#demo");

        $.each(message.results, function(index, value) {

            var content = $('<p><span>' + value.quote + '--By--' + '</span><span>' +
                value.name +'</span></p>');
            item.append(content);

        });

    }

});
