

//document.addEventListener('keydown', two());
//
//function two(){
//    
//    textera = document.getElementById("Keylogger");
//    textera.value*2
//
//}

document.addEventListener("keydown", function(event)
{
    text = document.getElementById("keylogger");
    text.value += event.key;
});
