//function showhide(){
//    
//    let citations;
//
//    if(citations != document.write("<article id='citation'>L'important n'est pas la chute, mais l'atterrissage.</article>")){
//        document.open();
//        citations = document.write("<article id='citation'>L'important n'est pas la chute, mais l'atterrissage.</article>");
//        document.close();
//    }
//    else{
//        delete citations;
//    }
//    
//}

let a;
function showhide(){

    if(a==1){
        document.getElementById("citation").style.display = "inline";
        return a=0;
    }
    else{
        document.getElementById("citation").style.display = "none";
        return a=1;
    }
}