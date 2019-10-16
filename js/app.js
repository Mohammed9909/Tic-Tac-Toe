let img = false;
const x = "images /x.png";
const o = "images /o.png";
const z1 = document.querySelector('#zone-1', "img");
const z2 = document.querySelector('#zone-2', 'img');
const z3 = document.querySelector('#zone-3', 'img');
const z4 = document.querySelector('#zone-4', 'img');
const z5 = document.querySelector('#zone-5', 'img');
const z6 = document.querySelector('#zone-6', 'img');
const z7 = document.querySelector('#zone-7', 'img');
const z8 = document.querySelector('#zone-8', 'img');
const z9 = document.querySelector('#zone-9', 'img');

const turn = document.querySelector(".turn .dImg");
const win = document.querySelector('.winner');

//the conter for how many step they play in the game
let conter = 0;
let scorex = 0;
let scoreo = 0;
let tei = 0;
const play = function () {
    img = !img
    console.log(this)

    if (img == true) {
        turn.setAttribute("src", o)

        const X = document.querySelector(`#${this.id} > img`);

        X.setAttribute("src", x);
        X.style.width = "100%";

    }
    else {
        turn.setAttribute("src", x)
        const O = document.querySelector(`#${this.id} > img`);
        // setTimeout(O, 100);
        O.setAttribute("src", o);
        O.style.width = "100%";

    }
    this.removeEventListener("click", play)

    conter++;
    setTimeout(check, 100);
}


// to restart game 

const restart = document.getElementById("restart");
const restartGame = function () {
    z1.querySelector('img').removeAttribute('src');
    z2.querySelector('img').removeAttribute('src');
    z3.querySelector('img').removeAttribute('src');
    z4.querySelector('img').removeAttribute('src');
    z5.querySelector('img').removeAttribute('src');
    z6.querySelector('img').removeAttribute('src');
    z7.querySelector('img').removeAttribute('src');
    z8.querySelector('img').removeAttribute('src');
    z9.querySelector('img').removeAttribute('src');

    z1.addEventListener("click", play);
    z2.addEventListener("click", play);
    z3.addEventListener("click", play);
    z4.addEventListener("click", play);
    z5.addEventListener("click", play);
    z6.addEventListener("click", play);
    z7.addEventListener("click", play);
    z8.addEventListener("click", play);
    z9.addEventListener("click", play);
    conter = 0;
    win.innerText="";

}

restart.addEventListener("click", restartGame)



z1.addEventListener("click", play);
z2.addEventListener("click", play);
z3.addEventListener("click", play);
z4.addEventListener("click", play);
z5.addEventListener("click", play);
z6.addEventListener("click", play);
z7.addEventListener("click", play);
z8.addEventListener("click", play);
z9.addEventListener("click", play);



//the function know how is win and Tei
const check = function () {
    let img1 = document.querySelector("#img1").getAttribute("src");
    let img2 = document.querySelector("#img2").getAttribute("src");
    let img3 = document.querySelector("#img3").getAttribute("src");
    let img4 = document.querySelector("#img4").getAttribute("src");
    let img5 = document.querySelector("#img5").getAttribute("src");
    let img6 = document.querySelector("#img6").getAttribute("src");
    let img7 = document.querySelector("#img7").getAttribute("src");
    let img8 = document.querySelector("#img8").getAttribute("src");
    let img9 = document.querySelector("#img9").getAttribute("src");


    if (img1 == "images /x.png" && img2 == "images /x.png" && img3 == "images /x.png") {
        win.innerText = "Player of X win";
        scorex++;
        REListener();
    }
    else if (img4 == "images /x.png" && img5 == "images /x.png" && img6 == "images /x.png") {
        win.innerText = "Player of X win";
        scorex++;
        REListener();
    }
    else if (img7 == "images /x.png" && img8 == "images /x.png" && img9 == "images /x.png") {
        win.innerText = "Player of X win";
        scorex++;
        REListener();
    }
    else if (img1 == "images /x.png" && img4 == "images /x.png" && img7 == "images /x.png") {
        win.innerText = "Player of X win";
        scorex++;
        REListener();
    }
    else if (img2 == "images /x.png" && img5 == "images /x.png" && img8 == "images /x.png") {
        win.innerText = "Player of X win";
        scorex++;
        REListener();
    }
    else if (img3 == "images /x.png" && img6 == "images /x.png" && img9 == "images /x.png") {
        win.innerText = "Player of X win";
        scorex++;
        REListener();
    }
    else if (img1 == "images /x.png" && img5 == "images /x.png" && img9 == "images /x.png") {
        win.innerText = "Player of X win";
        scorex++;
        REListener();
    }
    else if (img3 == "images /x.png" && img5 == "images /x.png" && img7 == "images /x.png") {
        win.innerText = "Player of X win";
        scorex++;
        REListener();
    }
    else if (img1 == "images /o.png" && img2 == "images /o.png" && img3 == "images /o.png") {
        win.innerText = "Player of O win";
        scoreo++;
        REListener();
    }
    else if (img4 == "images /o.png" && img5 == "images /o.png" && img6 == "images /o.png") {
        win.innerText = "Player of O win";
        scoreo++;
        REListener();
    }
    else if (img7 == "images /o.png" && img8 == "images /o.png" && img9 == "images /o.png") {
        win.innerText = "Player of O win";
        scoreo++;
        REListener();
    }
    else if (img1 == "images /o.png" && img4 == "images /o.png" && img7 == "images /o.png") {
        win.innerText = "Player of O win";
        scoreo++;
        REListener();
    }
    else if (img2 == "images /o.png" && img5 == "images /o.png" && img8 == "images /o.png") {
        win.innerText = "Player of O win";
        scoreo++;
        REListener();
    }
    else if (img3 == "images /o.png" && img6 == "images /o.png" && img9 == "images /o.png") {
        win.innerText = "Player of O win";
        scoreo++;
        REListener();
    }
    else if (img1 == "images /o.png" && img5 == "images /o.png" && img9 == "images /o.png") {
        win.innerText = "Player of O win";
        scoreo++;
        REListener();
    }
    else if (img3 == "images /o.png" && img5 == "images /o.png" && img7 == "images /o.png") {
        win.innerText = "Player of O win";
        scoreo++;
        REListener();
    }
    else if (conter == 9) {
        win.innerText = "Tei";
        tei++;
        REListener();
    }

    // the total how many x is win
    let scoreOfx = document.querySelector("span.scoreX");
    scoreOfx.textContent = scorex;
    
    // the total how many o is win
    let scoreOfo = document.querySelector("span.scoreO");
    scoreOfo.textContent = scoreo;
    // the total how many Tei
    let scoreOfTei = document.querySelector("span.scoreT");
    scoreOfTei.textContent = tei;

}

const REListener = function () {
    z1.removeEventListener("click", play);
    z2.removeEventListener("click", play);
    z3.removeEventListener("click", play);
    z4.removeEventListener("click", play);
    z5.removeEventListener("click", play);
    z6.removeEventListener("click", play);
    z7.removeEventListener("click", play);
    z8.removeEventListener("click", play);
    z9.removeEventListener("click", play);
}