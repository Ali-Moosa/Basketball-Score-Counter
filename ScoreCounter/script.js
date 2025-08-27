let homie = document.querySelector("#home");
let score=0;
function one(){
  score+=1;
  homie.innerText=score;
}

function two(){
  score+=2;
  homie.innerText=score;
}

function three(){
  score+=3;
  homie.innerText=score;
}

let gueste = document.querySelector("#guest");
let scoree=0;
function one1(){
  scoree+=1;
  gueste.innerText=scoree;
}

function two2(){
  scoree+=2;
  gueste.innerText=scoree;
}

function three3(){
  scoree+=3;
  gueste.innerText=scoree;
}

let cleer= document.querySelector(".clear");
function zero(){
  gueste.innerText=0;
  homie.innerText=0;
  score=0;
  scoree=0;
}