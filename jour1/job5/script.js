function afficherjourssemaines(){
    
    let jourssemaines = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

    for(let i = 0; i < jourssemaines.length;i++){
        document.write(" " , jourssemaines[i]);
    }
}

afficherjourssemaines()