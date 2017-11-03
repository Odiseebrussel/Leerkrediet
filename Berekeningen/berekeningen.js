'use strict';

const leerkrediet = 180;

var vakken = ["ICT Organisation 1","Information management 1","Communicatietraining 1","Software engineering 1","Application development 1","Database development 1","Mobile en internet 1","System Management 1","Network Management 1"];
var studiepunten = [4,3,4,3,4,3,3,3,3];
var rnummer = 'R0282865';
var naam = 'Berton Lutina Mulamba';

for(var i = 0; i < vakken.length - 1 ; i++){
    
    var regel = `<tr><td>${rnummer}</td><td>${naam}</td><td>${vakken[i+1]}</td><td>${studiepunten[i+1]} sp.</td></tr>`;
    $("table").append(regel);
    console.log(regel);
}
