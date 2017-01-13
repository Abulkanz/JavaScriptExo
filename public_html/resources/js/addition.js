/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
var contenu = "";
var somme = 0;

var addPosee = [15, 25, 14, 46,18, 48, 23, 14, 48, 67, 24, 76, 35];

var terme = document.getElementById("addition");

for(var i=0; i < addPosee.length; i++){
    if(i === 0){
        contenu = contenu + addPosee[i] + "<br>";
    }else if(i === addPosee.length){
        contenu = contenu + addPosee[i];
    }else{
        contenu = contenu + " + " + addPosee[i] + "<br>"; 
    }
    somme += addPosee[i];
}
    terme.innerHTML = contenu + "------<br>" + somme;

