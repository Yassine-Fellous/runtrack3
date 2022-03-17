//document.getElementById('button').onclick;
//document.getElementById('but').onclick;
//
//let texte = document.write("le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément.")
//
//texte.remove();
//
//if(document.getElementById('button').onclick;){
//
//}


//function remo(){
//
//    if(document.getElementById('button').onclick){
//        document.getElementById("phrase").style.display = "inline";
//    }
//    else if(document.getElementById('but').onclick){
//        document.getElementById("phrase").style.display = "none";
//    }
//}
//
//remo();
//window.addEventListener("DOMContentLoaded", (event) => {
//    console.log("DOM entièrement chargé et analysé");
//    });
//var a;
//
//function apparrait(){
//
//    if(a==1){
//        document.getElementById("phrase").style.display = "inline";
//        return a=0;
//    }
//}
//
//function disparait(){
//    if(a==0){
//        document.getElementById("phrase").style.display = "none";
//        return a=1;
//    }
//}
//
//
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");
    });

$(document).ready(function(){

    $("#but1").click(function(){
        $("p").hide();
    });

    $("#but2").click(function(){
        $("p").show();
    });
    
});