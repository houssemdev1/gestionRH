

function print_user() {
    var i;
    var objLinea = localStorage.getItem("membres");
var objJson = JSON.parse(objLinea);
for(i=0;i<3;i++)
{
   console.log( objJson[i]);
}
}
/*
function supprimer_tout() {
    localStorage.clear();
    afficher();
}

function supprimer_utilisateur() {
    var email = document.getElementById("email").value;
    localStorage.removeItem(email);

    document.getElementById("email").value = "";
    afficher();
}
*/
function save_user() {
    var val;
    var objetform = {
        objemail: document.getElementById("email").value,
        objnom: document.getElementById("n").value,
        objpren: document.getElementById("pren").value,
       
        objmotpasse: document.getElementById("tt").value,
        objdatenais: document.getElementById("datenais").value
    };
    val = objetform;
    localStorage.setItem(val.objemail, val.objpren + "," + val.objnom + ";" + val.objdatenais + "-" + val.objmotpasse);
}


function update_user() {
    var cle2 = "";
    var val;
    var i;
    var user = document.getElementById("email").value;
    var i = 0;
    for (i = 0; i <= localStorage.length - 1; i++) {
        if (user == localStorage.key(i)) {
            save_storage();
        }
    }
    afficher();
}

