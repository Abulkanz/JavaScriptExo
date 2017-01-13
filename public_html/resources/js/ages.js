"use strict";

//METTEZ TOUT LE JS DANS UN AUTRE FICHIER AFIN DE NE PAS MELANGER L'HTML ET LE JS
//INSPIREZ-VOUS DU FICHIER ../js/regions.js



/* Indiquez par le biais d'alert ou d'un champ HTML la description qui correspond à l'âge saisi
 * 0 à 1 compris : Vous êtes un bébé.
 * 1 à 6 ans compris : Vous êtes un jeune enfant.
 * 7 à 11 ans compris : Vous êtes un enfant qui a atteint l'âge de raison.
 * 12 à 17 ans compris : Vous êtes un adolescent.
 * 17 à ???: Vous êtes un jeune adulte.
 * Supérieur à ??? : Vous êtes un sénior.
 */


/* SUITE DE L'EXERCICE :
 * Vous pouvez aussi ajouter un radio button grâce auquel vous déterminerez le sexe de l’utilisateur. 
 * A l’aide de ternaires, vous pourrez ainsi accorder les phrases en fonction de l’utilisateur.
 */

function giveFeature() {
    var rep = "";
    var error = null;
    var genre;
    var age;

    var bouRad = document.getElementsByName("genre");
    for (var i = 0; i < bouRad.length; i++) {
        if (bouRad[i].checked) {
            genre = bouRad[i].value;
            break;
        }
    }
    switch (genre) {
        case "M":
            genre = " un homme ";
            break;
        case "F":
            genre = " une femme ";
            break;
        default:
            genre = " un homme ";
    }

    age = document.getElementById("age").value;

    if(age <= 1) {
        rep = "Tu es " + genre + " bébé balèze";
    } else if (age <= 6) {
        rep = "Tu es " + genre + " jeune enfant";
    } else if (age <= 11) {
        rep = "Tu es " + genre + " qui a atteint l'âge de raison";
    } else if (age <= 17) {
        rep = "Tu es " + genre + " jeune mais adulte";
    } else if (age <= 55) {
        rep = "Tu es " + genre + " adulte";
    } else if (age < 155) {
        rep = "Vous êtes  " + genre + " d'expérience.";
    } else {
        error = "Erreur";
    }

    document.getElementById("resultat2").innerHTML = error === null ? rep : error;
}



