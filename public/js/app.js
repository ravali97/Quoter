var parseID = "p3thXPDaO80BNs9N6McNuIpwu6xoe0WAM8Bb5yhO";
var parseRestKey = "BfnLGBVpXcGFjLy0hjagdGf0m1yT2CSuN1T5j8aN";
$(document).ready(function() {
    getMessages();


    $("#send").on("click", function() {

        var username = $("#username").val();
        var message = $("#message").val();
        console.log(username);
        console.log("!...");

        $.ajax({
            url: 'https://api.parse.com/1/classes/MB2',
            headers: {
                'X-Parse-Application-Id': parseID,
                'X-Parse-REST-API-Key': parseRestKey
            },
            contentType: 'application/json',
            dataType: 'json',
            processData: true,
            data: JSON.stringify({
                'username': username,
                'message': message

            }),
            type: 'POST',
            success: function() {
                console.log('sent');
                getMessages();
            },
            error: function() {
                console.log('error');
            }


        });

    });

});

function getMessages() {
    $.ajax({
        url: 'https://api.parse.com/1/classes/MB2',
        headers: {
            'X-Parse-Application-Id': parseID,
            'X-Parse-REST-API-Key': parseRestKey
        },
        contentType: 'application/json',
        dataType: 'json',
        type: 'GET',
        success: function(response) {
            console.log('get');
            updateView(response);
        },
        error: function() {
            console.log('error');
        }
    });
}

function updateView(messages) {
    var table = $('.table tbody');
    table.html('');
    $.each(messages.results, function(index, value) {
        var trEl =
            $('<tr><td>' + value.username + '</td><td>' + value.message +
                '</td></tr>');
        table.append(trEl);
    });
    console.log(messages);
}
