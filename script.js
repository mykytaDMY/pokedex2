'use strict';

var body = document.querySelector('body');
var title = document.querySelector('body');
var serch = document.getElementsByClassName("search")[0];
var tit = document.getElementsByClassName("title")[0];
var boyyesPar = document.getElementsByClassName("boyyes")[0];

var poke;
var xhr;
var sprites;

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
        sprites = Object.values(poke.sprites);
        tit.innerHTML = poke.name;

        var boyye = document.createElement("div");
        boyyesPar.innerHTML = '';
        sprites.forEach(function(v, i) {
            if (v != null) {
                var boy = boyye.cloneNode(true);
                boy.style.backgroundImage = "url('" + v + "')";
                boyyesPar.appendChild(boy);
            }
        });
      }
    };

    xhr.send();
}

function goRan() {
    serch.value = Math.floor((Math.random() * 964) + 1);
    goSearch2();
}
