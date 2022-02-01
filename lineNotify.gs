function sendNoti(){
    // Text only.
    var msg = "";
    var token = "";

    var options = {
        "method" : "post",
        "payload" : "message= " + msg,
        "headers" : {"Authorization" : "Bearer " + token}
    };
    UrlFetchApp.fetch("https://notify-api.line.me/api/notify",options);

    // Text and image.
    var msg = "";
    var token = "";
    var imageURL = "";

    var formData = {
        'message' : msg,
        'imageThumbnail' : imageURL,
        'imageFullsize' : imageURL
    };
    var options = {
        'method': "post",
        'payload': formData,
        'headers': { "Authorization": "Bearer " + token }
    };
    UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}