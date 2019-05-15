let images = [
    "../public/img/sorteio/monster1.jpg",
    "../public/img/sorteio/monster2.jpg",
    "../public/img/sorteio/monster3.jpg",
    "../public/img/sorteio/monster4.jpg",
    "../public/img/sorteio/monster5.jpg",
]

window.addEventListener("load", function() {
    var rand1 = Math.round(Math.random()*4);
    var rand2 = Math.round(Math.random()*4);
    var rand3 = Math.round(Math.random()*4);

    document.getElementsByClassName("icon")[0].src = images[rand1];
    document.getElementsByClassName("icon2")[0].src = images[rand2];
    document.getElementsByClassName("icon3")[0].src = images[rand3];

    if (rand1 == 3 && rand2 == 3 && rand3 == 3){
        document.getElementById("sucesso").innerText = "Você salvou o Dodogama! s2";
    } else {
        document.getElementById("fracasso").innerText = "Você não salvou o Dodogama!";
    }
});