var myApp = new Framework7();
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    domCache: true
    , template7Pages: true
    , pushState: true
});
$$('.btn').on('click', function () {
    var username = $$('input[name="username"]').val();
    var password = $$('input[name="password"]').val();
    var zin = "Welcome Berton Lutina Mulamba";
    if (username === "test" && password === "test") {
        mainView.router.load({
            pageName: "loadingpage"
        });
        $$('.login-screen-title').append(zin);
        var dataVakken = {}
        dataVakken.format = "json";
        $$.ajax({
            type: 'GET'
            , url: 'Vakken.json'
            , dataType: 'JSON'
            , data: dataVakken
            , success: function (data) {
                data = JSON.parse(data);
                var str = '';
                var opleiding = data.Bedrijfskunde;
                var vakken = data.Bedrijfskunde.ToegepasteInformatica; // plichtvakken
                var Duties = data.Bedrijfskunde.ToegepasteInformatica.Duties; // plichtvakken
                var electivecourse = data.Bedrijfskunde.ToegepasteInformatica.ElectivesModules; // hsjkhkjdhskf
                var elective = data.Bedrijfskunde.ToegepasteInformatica.Electives; // jsklqshdkjfh
                var options = data.Bedrijfskunde.ToegepasteInformatica.Options; // jsklqshdkjfh
                console.log(Duties);
                console.log(data);
            }
            , complete: function (xhr, stat) {
                setTimeout(function () {
                    $$('#spin').detach();
                    mainView.router.load({
                        pageName: 'Vakken'
                    })
                }, 2000);
            }
            , error: function (xhr) {
                alert("Error");
            }
        });
    }
    else {
        alert("Username and password don't match. Try it again");
    }
});
myApp.onPageInit('Vakken', function (page) {
    $$('.back').on('click', function () {
        page.view.router.loadPage({
            pageName: 'login-screen'
        });
    });
});
/*

var changeTheColor = setInterval(Changecolor, 500);

function Changecolor() {
    var opacity = [0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90, 1];
    var color1 = Math.floor(Math.random() * 126) + 1;
    var color2 = Math.floor(Math.random() * 126) + 1;
    var color3 = Math.floor(Math.random() * 126) + 1;
    $$(".logo").trigger('lazy').css({
        "box-shadow": " 0 8px 6px -6px rgba(" + color1 + "," + color2 + "," + color3 + ",0.40)"
    });
};
/** pageContainer.find('.open-indicator').on('click',function(){
        myApp.showPreloader();
      setTimeout(function(){
          myApp.hidePreloader();
      },2000);
    });
});   
**/