'use strict';
// variable en waarde
const leerkrediet = 180;
var vakken = ["ICT Organisation 1", "Information management 1", "Communicatietraining 1", "Software engineering 1", "Application development 1", "Database development 1", "Mobile en internet 1", "System Management 1", "Network Management 1"];
var studiepunten = [4, 3, 4, 3, 4, 3, 3, 3, 3];
var rnummer = 'R0282865';
var naam = 'Berton Lutina Mulamba';
var checkbox = $('input[type=checkbox]');
// loop voor de vakken, studiepunten te weergeven in een een tabel
for (var i = 0; i < vakken.length - 1; i++) {
    var regel = `<tr><td>${rnummer}</td><td>${naam}</td><td>${vakken[i+1]}</td><td>${studiepunten[i+1]} sp.</td><td>${checkbox}</td></tr>`;
    $("table").append(regel);
}


// **** opgenomen studiepunten te weergeven
var opgenomenStudiepunten = studiepunten.reduce(function (a, b) {
    return a + b;
}, 0);
document.getElementById("opgenomenStudiepuntenQuota").innerHTML = "Aantal opgenomen studiepunten: " + opgenomenStudiepunten;


// **** Data ophalen via een API 
var data = {
    "query": {
        "match_all": {}
    }
}
data.format = "json";
$.ajax({
    type: 'GET'
    , url: 'https://dataservice.kuleuven.be/v2/program2016/program/502689121'
    , dataType: 'JSON'
    , data: data
    , success: function (data) {
        var write = '';
        $(data).each(function (key, value) {
            write += value._id;
            write += '</br> ' + value._index;
            write += '</br> ' + value._source.academicYear;
            console.log(value._id);
            console.log(value._index);
            console.log(value._source.academicYear);
        });
        $('#write').append(write);
    }
});


$(document).ready(

    $('form-control button').click({
$.mobile.changePage( "#loginPassword", {
  transition: "pop",
  reverse: false,
  changeHash: false;
});
    });
    
);
