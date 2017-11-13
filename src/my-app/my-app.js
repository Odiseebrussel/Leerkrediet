var myApp = new Framework7();
var $$ = Dom7;
 
var mainView = myApp.addView('.view-main',{
    
    domCache: true
});
 
myApp.onPageInit('login-screen', function (page) {
  var pageContainer = $$(page.container);
  pageContainer.find('.list-button').on('click', function () {
    var username = pageContainer.find('input[name="username"]').val();
    var password = pageContainer.find('input[name="password"]').val();
    // Handle username and password
     // myApp.alert(`Welcome ${username}`);
    
  });

//    pageContainer.find('.open-indicator').on('click',function(){
//        myApp.showPreloader();
//      setTimeout(function(){
//          myApp.hidePreloader();;
//      },2000);
//    });
});     
