let img = false;
const x = "images /x.png";
const o = "images /o.png";
const z1 = document.querySelector('#zone-1');
const z2 = document.querySelector('#zone-2', 'img');
const z3 = document.querySelector('#zone-3', 'img');
const z4 = document.querySelector('#zone-4', 'img');
const z5 = document.querySelector('#zone-5', 'img');
const z6 = document.querySelector('#zone-6', 'img');
const z7 = document.querySelector('#zone-7', 'img');
const z8 = document.querySelector('#zone-8', 'img');
const z9 = document.querySelector('#zone-9', 'img');




const play = function(){
    img = !img
    console.log(this)
    
    if (img == true){
       const X = document.querySelector(`#${this.id} > img`);
    X.setAttribute("src",x);
    X.style.width="100%";
    }
    
    else{
        const O = document.querySelector(`#${this.id} > img`);
    O.setAttribute("src",o);
    O.style.width="100%";

    
    }
    this.removeEventListener("click",play)
   
    
    check();  
}


// to restart game 
const boot = document.querySelector('button');
const onclick = function (){

    // clear : function() {
    //     this.play.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // }

}

boot.addEventListener("click",onclick);



z1.addEventListener("click",play);
z2.addEventListener("click",play);
z3.addEventListener("click",play);
z4.addEventListener("click",play);
z5.addEventListener("click",play);
z6.addEventListener("click",play);
z7.addEventListener("click",play);
z8.addEventListener("click",play);
z9.addEventListener("click",play);

const check = function(){
let img1 = document.querySelector("#img1").getAttribute("src");
let img2 = document.querySelector("#img2").getAttribute("src");
let img3 = document.querySelector("#img3").getAttribute("src");
let img4 = document.querySelector("#img4").getAttribute("src");
let img5 = document.querySelector("#img5").getAttribute("src");
let img6 = document.querySelector("#img6").getAttribute("src");
let img7 = document.querySelector("#img7").getAttribute("src");
let img8 = document.querySelector("#img8").getAttribute("src");
let img9 = document.querySelector("#img9").getAttribute("src");


if ( img1 == "images /x.png" && img2 == "images /x.png"&& img3 == "images /x.png"){
    alert("player 1 win");
    }
else if ( img4 == "images /x.png" && img5 == "images /x.png"&& img6 == "images /x.png"){
    alert("player 1 win");
    }
else if ( img7 == "images /x.png" && img8 == "images /x.png"&& img9 == "images /x.png"){
    alert("player 1 win");
        }
else if ( img1 == "images /x.png" && img4 == "images /x.png"&& img7 == "images /x.png"){
    alert("player 1 win");
        }
else if ( img2 == "images /x.png" && img5 == "images /x.png"&& img8 == "images /x.png"){
    alert("player 1 win");
        }
else if ( img3== "images /x.png" && img6 == "images /x.png"&& img9 == "images /x.png"){
    alert("player 1 win");
        }
else if ( img1 == "images /x.png" && img5 == "images /x.png"&& img9 == "images /x.png"){
    alert("player 1 win");
        }
else if ( img3 == "images /x.png" && img5 == "images /x.png"&& img7 == "images /x.png"){
    alert("player 1 win");
        }
else if ( img1 == "images /o.png" && img2 == "images /o.png" && img3 == "images /o.png"){
    alert("player 2 win");
        }
else if ( img4 == "images /o.png" && img5 == "images /o.png" && img6 == "images /o.png"){
    alert("player 2 win");
        }
else if ( img7 == "images /o.png" && img8 == "images /o.png" && img9 == "images /o.png"){
    alert("player 2 win");
        }
else if ( img1 == "images /o.png" && img4 == "images /o.png" && img7 == "images /o.png"){
    alert("player 2 win");
        }
else if ( img2 == "images /o.png" && img5 == "images /o.png" && img8 == "images /o.png"){
    alert("player 2 win");
        }
else if ( img3== "images /o.png" && img6 == "images /o.png" && img9 == "images /o.png"){
    alert("player 2 win");
        }
else if ( img1 == "images /o.png" && img5 == "images /o.png" && img9 == "images /o.png"){
    alert("player 2 win");
        }
else if ( img3 == "images /o.png" && img5 == "images /o.png" && img7 == "images /o.png"){
    alert("player 2 win");
        }
else if( img1 && img2 && img3 && img4 && img5 && img6 && img7 && img8 && img9 == 0){
    alert("Tei")
        }
        

}