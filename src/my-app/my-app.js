var myApp = new Framework7();
var $$ = Dom7;
var user = null;
var mainView = myApp.addView('.view-main', {
    domCache: true,
    template7Pages: true,
    pushState: true
});
$$('.btn').on('click', function () {
    var username = $$("#username").val();
    var password = $$("#password").val();
    var dataString = 'username=' + username + '&password=' + password;
    if (username.length > 0 && password.length > 0) {

        $$.ajax({
            type: "POST",
            url: "authen_login.php",
            data: dataString,
            cache: false,
            //beforeSend: function () {
              //  $("#loginBtn").val('Connecting...');
            //},
            success: function (data) {
                if (data) {
                    //window.location.href = "application.php";
                    console.log("gelukt!")
                } else {
                    console.log("niet gelukt");
                }
            }

        });
    }
    return false;

});
