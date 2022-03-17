
//let keys = {
//    38: "up",
//    40: "down"
//}
//
//let konam = ['Up', 'Up', 'Down', 'Down'];
//
//keycount = 0;
//
//function konami(event){
//    
//    let keypressed = keys[event.KeyCode];
//    
//    if(keypressed !== konam[keycount]){
//        body.classList.remove('oui')
//    }
//}
//
//window.addEventListener('keydown', konami);
//

//body.classList.remove('oui');
//
//let ev = window.addEventListener('keydown');
//
//let konam = ['Up', 'Up', 'Down', 'Down'];
//
//function konami(){
//    if(ev == konam){
//        body.classList.add('oui')
//    }
//    
//}
//
//konami();
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! IMPORTANT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//POUR QUE LA PAGE HTML SE CHARGE ENTIEREMENT AVANT L'EXECUTION DU JAVASCRIPT !
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");
    });

oui.classList.remove('oui');

var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];

    if (key == requiredKey) {

    konamiCodePosition++;

    if (konamiCodePosition == konamiCode.length) {
        activateCheats();
        konamiCodePosition = 0;
    }
    } else {
    konamiCodePosition = 0;
    }
});

function activateCheats() {
    oui.classList.add('oui');
}

