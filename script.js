'use strict';

var body = document.querySelector('body');
var title = document.querySelector('body');
var serch = document.getElementsByClassName("search")[0];
var tit = document.getElementsByClassName("title")[0];

var poke;
var xhr;

function goSearch2() {

    if (serch.value < 1) {
        serch.value = 1;
    } else if(serch.value > 964) {
        serch.value = 964;
    }
    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = "https://pokeapi.co/api/v2/pokemon/" + serch.value;

    xhr.open(method, url, true);

    xhr.onreadystatechange = function (XMLHttpRequest) {
      if(xhr.readyState === 4 && xhr.status === 200) {
        poke = JSON.parse(xhr.responseText);
        body.style.background = "url('" + poke.sprites.back_default +"')";
        console.log(tit);
        tit.innerHTML = poke.name;
      }
    };

    xhr.send();
}

function goRan() {
    serch.value =Math.floor((Math.random() * 964) + 1);
    goSearch2();
}