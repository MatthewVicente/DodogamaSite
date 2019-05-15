let images = [
    "../public/img/sorteio/monster1.jpg",
    "../public/img/sorteio/monster2.jpg",
    "../public/img/sorteio/monster3.jpg",
    "../public/img/sorteio/monster4.jpg",
    "../public/img/sorteio/monster5.jpg",
]

window.addEventListener("load", function() {
    var rand1 = Math.round(Math.random() * 4 + 1);
    var rand2 = Math.round(Math.random() * 4 + 1);
    var rand3 = Math.round(Math.random() * 4 + 1);

    switch (rand1) {
        case 1:
            document.getElementsByClassName("icon")[0].src = "../public/img/sorteio/monster1.jpg";
            break;
        case 2:
            document.getElementsByClassName("icon")[0].src = "../public/img/sorteio/monster2.jpg";
            break;
        case 3:
            document.getElementsByClassName("icon")[0].src = "../public/img/sorteio/monster3.jpg";
            break;
        case 4:
            document.getElementsByClassName("icon")[0].src = "../public/img/sorteio/monster4.jpg";
            break;
        case 5:
            document.getElementsByClassName("icon")[0].src = "../public/img/sorteio/monster5.jpg";
            break;
    }
    switch (rand2) {
        case 1:
            document.getElementsByClassName("icon2")[0].src = "../public/img/sorteio/monster1.jpg";
            break;
        case 2:
            document.getElementsByClassName("icon2")[0].src = "../public/img/sorteio/monster2.jpg";
            break;
        case 3:
            document.getElementsByClassName("icon2")[0].src = "../public/img/sorteio/monster3.jpg";
            break;
        case 4:
            document.getElementsByClassName("icon2")[0].src = "../public/img/sorteio/monster4.jpg";
            break;
        case 5:
            document.getElementsByClassName("icon2")[0].src = "../public/img/sorteio/monster5.jpg";
            break;
    }
    switch (rand3) {
        case 1:
            document.getElementsByClassName("icon3")[0].src = "../public/img/sorteio/monster1.jpg";
            break;
        case 2:
            document.getElementsByClassName("icon3")[0].src = "../public/img/sorteio/monster2.jpg";
            break;
        case 3:
            document.getElementsByClassName("icon3")[0].src = "../public/img/sorteio/monster3.jpg";
            break;
        case 4:
            document.getElementsByClassName("icon3")[0].src = "../public/img/sorteio/monster4.jpg";
            break;
        case 5:
            document.getElementsByClassName("icon3")[0].src = "../public/img/sorteio/monster5.jpg";
            break;
    }

    if (rand1 == 4 && rand2 == 4 && rand3 == 4) {
        document.getElementById("sucesso").innerText = "Você salvou o Dodogama! s2";
    } else {
        document.getElementById("fracasso").innerText = "Você não salvou o Dodogama!";
    }
});