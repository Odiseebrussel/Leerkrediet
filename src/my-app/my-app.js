"use strict";

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

var myApp = new Framework7();
var $$ = Dom7;
var user = null;
var mainView = myApp.addView('.view-main', {
    domCache: true
    , template7Pages: true
    , pushState: true
});
$$('.btn').on('click', function () {
    
    LadenFile();
    InvoegenData();
    SumOfSelectedValue();
            
});

// Functie om mijn file te Laden

function LadenFile(){
                var dataVakken = {}
                $$.ajax({
                            type: 'GET'
                            , url: 'Vakken.json'
                            , dataType: 'JSON'
                            , data: dataVakken
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

// Functie om mijn data in te voegen 

function InvoegenData(){
    var username = $$('input[name="username"]').val();
    var password = $$('input[name="password"]').val();
            var zin = "Welcome Berton Lutina Mulamba";
            if (username === "" && password === "") {
                user = {
                    username: username
                }
                mainView.router.load({
                    pageName: "loadingpage"
                });
                $$('.login-screen-title').append(zin);
                var dataVakken = {}
                $$.ajax({
                            type: 'GET'
                            , url: 'Vakken.json'
                            , dataType: 'JSON'
                            , data: dataVakken
                            , success: function (data) {
                                    data = JSON.parse(data);
                                    var str = '';
                                    var opleiding = data.Bedrijfskunde;
                                    var vakken = data.Bedrijfskunde["Toegepaste Informatica"]; // plichtvakken
                                    var Duties = data.Bedrijfskunde["Toegepaste Informatica"].Duties; // plichtvakken
                                    var electivescourses = data.Bedrijfskunde["Toegepaste Informatica"].ElectivesModules; // hsjkhkjdhskf
                                    var electives = data.Bedrijfskunde["Toegepaste Informatica"].Electives; // jsklqshdkjfh
                                    var options = data.Bedrijfskunde["Toegepaste Informatica"].Options; // jsklqshdkjfh
                                    $$("h1#invoer").html(Object.keys(data)[0]);
                                    $$("h2#invoer").html(Object.keys(opleiding)[0]);
                                
                                
 /************************************************************************************************************************************************************************************************************    DUTIES smartselect   **************************************************************** ******************************************************************************************************************************************************/
                                    var df1 = '';
                                    var df2 = '';
                                    var df3 = '';
                                    var somdf1 = 0;
                                    var somdf2 = 0;
                                    var somdf3 = 0;
                                    var fase1 = Object.keys(Duties)[0];
                                    var fase2 = Object.keys(Duties)[1];
                                    var fase3 = Object.keys(Duties)[2];
                                
                               // console.log(fase1);
                                //console.log(Duties["fase 1"].length);
                                //console.log(Duties["fase 1"][0]["COURSE"]);
                                
                            // Fase 1 van Duties ** duties = plicthvakken 
                                
                                     df1 += '<a href="#" data-searchbar = "true" data-searchbar-placeholder = "Search Course" data-searchbar-cancel="Cancel" class="item-link smart-select" data-navbar-theme="orange" data-form-theme="orange" ><select name="'+fase1+'" multiple> ';
                                    for (var i = 0; i < Duties["fase 1"].length; i++) {
                                        
                                            df1 += '<option value="' + Duties["fase 1"][i]["COURSE"]+ '" data-display-as="'+Duties["fase 1"][i]["CREDITS"]+'">'+Duties["fase 1"][i]["COURSE"]+' ( '+Duties["fase 1"][i]["CREDITS"]+'sp.)</option>';
                                        somdf1 += Duties["fase 1"][i]["CREDITS"];
                                    } 
                                
                                df1 += '</select><div class="item-content"><div class="item-inner"><div class="item-title" >'+fase1+'</div></div></div></a>';
                                
                                // test
                                //console.log(df1);
                           
                                // Fase 2 van Duties ** duties = plicthvakken 
                                     df2 += `<a href="#" data-searchbar = "true" data-searchbar-placeholder = "Search Course" data-searchbar-cancel="Cancel" class="item-link smart-select" data-navbar-theme="orange" data-form-theme="orange" ><select name="'+fase2+'" multiple> `;
                                    for (var j = 0; j < Duties["fase 2"].length; j++) {
                                            df2 += '<option value="' + Duties["fase 2"][j]["COURSE"]+ '" data-display-as="'+Duties["fase 2"][j]["CREDITS"]+'">'+Duties["fase 2"][j]["COURSE"]+' ( '+Duties["fase 2"][j]["CREDITS"]+'sp.)</option>';
                                    } 
                                
                                df2 += '</select><div class="item-content"><div class="item-inner"><div class="item-title " >'+fase2+'</div></div></div></a>';
                                
                                // Fase 3 van Duties ** duties = plicthvakken 
                                     df3 += '<a href="#" data-searchbar = "true" data-searchbar-placeholder = "Search Course" data-searchbar-cancel="Cancel" class="item-link smart-select"><select name="'+fase3+'" multiple> ';
                                    for (var d = 0; d < Duties["fase 3"].length; d++) {
                                            df3 += '<option value="' + Duties["fase 3"][d]["COURSE"]+ '" data-display-as="'+Duties["fase 3"][d]["CREDITS"]+'">'+Duties["fase 3"][d]["COURSE"]+' ( '+Duties["fase 3"][d]["CREDITS"]+'sp.)</option>';
                                    } 
                                
                                df3 += '</select><div class="item-content"><div class="item-inner"><div class="item-title " >'+fase3+'</div></div></div></a>';
                                
                                
                                // Display it on the DOM of the APP
                                $$("li.df1").html(df1);
                                $$("li.df2").html(df2);
                                $$("li.df3").html(df3);
    
                                
/************************************************************************************************************************************************************************************************************  Electives Modules smartselect *********************************************************** ******************************************************************************************************************************************************/
                                var optA = electivescourses["Option A: Design and Build Software"];
                                var optB = electivescourses["Option B : Manage Internet and Cloud"];
                                
                                var emA = '';
                                var emB = '';
                                    var optionA = Object.keys(electivescourses)[0];
                                    var optionB = Object.keys(electivescourses)[1];
                                    var f2A = Object.keys(optA)[0];
                                    var f3A = Object.keys(optA)[1];
                                    var f2B = Object.keys(optB)[0];
                                    var f3B = Object.keys(optB)[1];
                                
                               // console.log(optionA);
                                //console.log(optionB);
                                //console.log(f2A);
                                //cconsole.log(f3A);
                                    
                                 // SMart select Voor Optie A
                                     emA += '<a href="#" data-searchbar = "true" data-searchbar-placeholder = "Search Course" data-searchbar-cancel="Cancel" class="item-link smart-select" data-navbar-theme="green" data-form-theme="green"><select name="'+optionA+'" multiple><optgroup label="'+f2A+'">';
                                         
                                     for(var i = 0; i < optA["fase 2"].length; i++){
                                        emA += '<option class="'+optA["fase 2"][i].COURSE_ID+'" value="'+optA["fase 2"][i].COURSE+'">'+optA["fase 2"][i].COURSE+' ( '+optA["fase 2"][i].CREDITS+'sp.)</option>';
                                     }
                                
                                    emA += '</optgroup></br></br><optgroup label="'+f3A+'">';
                                                for(var j = 0; j < optA["fase 3"].length; j++){
                                        emA += '<option  class="'+optA["fase 3"][j].COURSE_ID+'" value="'+optA["fase 3"][j].COURSE+'">'+optA["fase 3"][j].COURSE+' ( '+optA["fase 3"][j].CREDITS+'sp.)</option>';
                                     }
                                           
                                emA += '</optgroup></select><div class="item-content"><div class="item-inner"><div class="item-title">'+optionA+'</div></div></div></a>';
                                
                                // SMart select voor Optie B
                                
                                emB += '<a href="#" data-searchbar = "true" data-searchbar-placeholder = "Search Course" data-searchbar-cancel="Cancel" class="item-link smart-select" data-navbar-theme="green" data-form-theme="green" ><select name="'+optionB+'" multiple><optgroup label="'+f2B+'">';
                                         
                                     for(var i = 0; i < optB["fase 2"].length; i++){
                                        emB += '<option class="'+optB["fase 2"][i].COURSE_ID+'" value="'+optB["fase 2"][i].COURSE+'" >'+optB["fase 2"][i].COURSE+' ( '+optB["fase 2"][i].CREDITS+'sp.)</option>';
                                     }
                                
                                    emB += '</optgroup></br></br><optgroup label="'+f3B+'">';
                                                for(var j = 0; j < optB["fase 3"].length; j++){
                                        emB += '<option class="'+optB["fase 3"][j].COURSE_ID+'" value="'+optB["fase 3"][j].COURSE+'">'+optB["fase 3"][j].COURSE+' ( '+optB["fase 3"][j].CREDITS+'sp.)</option>';
                                     }
                                           
                                emB += '</optgroup></select><div class="item-content"><div class="item-inner"><div class="item-title">'+optionB+'</div></div></div></a>';
                                
                                //console.log(emA);
                                //console.log(emB);
                                
                                $$("li.emA").html(emA);
                                $$("li.emB").html(emB);
 /************************************************************************************************************************************************************************************************************ Electives smartselect   **************************************************************** ******************************************************************************************************************************************************/
                                var electstr = '';
                                
                                var eF3 = Object.keys(electives)[0];
                                
                                //console.log(eF3);
                                
                                electstr += '<a href="#" data-searchbar = "true" data-searchbar-placeholder = "Search Course" data-searchbar-cancel="Cancel" class="item-link smart-select" data-navbar-theme="red" data-form-theme="red"> <select name="'+eF3+'" multiple>';
                                       for(var i = 0; i < electives["fase 3"].length ; i++){         
                                    electstr += '<option class="'+electives["fase 3"][i].COURSE_ID+'" value="'+electives["fase 3"][i].COURSE+'">'+electives["fase 3"][i].COURSE+' ( '+electives["fase 3"][i].CREDITS+'sp.)</option>';
                                       }
                                            
                                        electstr += '</select><div class="item-content"><div class="item-inner"><div class="item-title">'+eF3+'</div></div></div></a>';
                                $$("li.electives").html(electstr);
                                
                  
                                 
 /************************************************************************************************************************************************************************************************************ Options smartselect   **************************************************************** ******************************************************************************************************************************************************/   
                                
                                var optkeys = Object.keys(options["fase 3"]);
                                var OptVar = Object.values(options["fase 3"]);
                                var opt2 = options["fase 3"]["Option 2 : Intership mobility out of Europe"];
                                var opt5 = options["fase 3"]["Option 5 : Intership mobility in Europe : SHORT"] ; 
                                
                                var optStr = '';
                                
                               
                                optStr += '<a href="#"  data-searchbar = "true" data-searchbar-placeholder = "Search Course" data-searchbar-cancel="Cancel" class="item-link smart-select" class="layout-dark" ><select name="'+optkeys+'" multiple>';
                                        
                                for(var i = 0; i <optkeys.length ; i++){
                                            optStr += '<optgroup label="'+optkeys[i]+'">';
                                                
                                                if(optkeys[i] === "Option 2 : Intership mobility out of Europe"){
                                                    for(var j = 0 ; j < opt2.length; j++){
                                                    optStr += '<option class="'+opt2[j].COURSE_ID+'" value="'+opt2[j].COURSE+'">'+opt2[j].COURSE+' ( '+opt2[j].CREDITS+'sp. )</option>';
                                                    }
                                                }else if(optkeys[i] === "Option 5 : Intership mobility in Europe : SHORT"){
                                                    for(var j = 0 ; j < opt5.length; j++){
                                                    optStr += '<option class="'+opt5[j].COURSE_ID+'" value="'+opt5[j].COURSE+'">'+opt5[j].COURSE+' ( '+opt5[j].CREDITS+'sp. )</option>';
                                                    }
                                                }else {
                                                    optStr += '<option value="'+OptVar[i].COURSE+'">'+OptVar[i].COURSE+' ( '+OptVar[i].CREDITS+'sp. )</option>';
                                                }
                                                
                                                
                                            optStr += '</optgroup>';
                                }
                                        optStr += '</select><div class="item-content"><div class="item-inner"><div class="item-title">Intership: '+Object.keys(options)[0]+'</div></div></div></a>';
                                
                                $$("li.options").html(optStr);
                               
                                //console.log(Object.keys(options["fase 3"]));
                                //console.log(Object.values(options["fase 3"]));
                                //console.log(options["fase 3"]);
                                //var totaal = Object.keys(OptVar);
                                
                                //console.log(totaal);
                               
                                //console.log(opt2[0].COURSE);
                                
                               
                                
                                
                              
                
            }

        });
    }
    else {
        alert("Username and password don't match. Try it again");
    }
}

function SumOfSelectedValue(){
    
    var som = 0;
    var dataVakken = {};
    $$.ajax({
                            type: 'GET'
                            , url: 'Vakken.json'
                            , dataType: 'JSON'
                            , data: dataVakken
                            , success: function (data) {
                                    data = JSON.parse(data);
console.log(data[""]);
                                
                                
                            }

        });
}

myApp.onPageInit('login-screen', function (page) {
    if(user !== null){
        mainView.router.load({
            pageName: "Vakken"
        });
    }
 
});
