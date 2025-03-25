const min= 1;
const maxeasy= 5;
const maxmid= 25;
const maxhard= 100;

const easy= document.getElementById("easy");
const mid= document.getElementById("mid");
const hard= document.getElementById("hard");
const select= document.getElementById("select");
const guess= document.getElementById("guess");
const input= document.getElementById("input");
const enter= document.getElementById("enter");
const correct= document.getElementById("correct");
const value= document.getElementById("value");
const back= document.getElementById("back");

let x;
let answer;
let running= true;


easy.onclick= function(){
    answer= Math.floor(Math.random() * maxeasy) + min;
    console.log("Answer:", answer);
    select.style.display= "none";
    guess.style.display= "block";
    enter.onclick= function(){
        x= input.value;
        if(x== answer){
            correct.textContent= `Your guess is correct`;
        }
        else{
            correct.textContent= `Your guess is wrong`
            value.textContent= `The answer is: ${answer}`
        }
    }
    back.onclick= function(){
        guess.style.display= "none";
        select.style.display= "block";
    }
    input.value ="";
    correct.textContent= "";
    value.textContent= "";
};

mid.onclick= function(){
    answer= Math.floor(Math.random() * maxmid) + min;
    console.log("Answer:", answer);
    select.style.display= "none";
    guess.style.display= "block";
    enter.onclick= function(){
        x= input.value;
        if(x== answer){
            correct.textContent= `Your guess is correct`;
        }
        else{
            correct.textContent= `Your guess is wrong`
            value.textContent= `The answer is: ${answer}`
        }
    }
    back.onclick= function(){
        guess.style.display= "none";
        select.style.display= "block";
    }
    input.value= "";
    correct.textContent= "";
    value.textContent= "";
};

hard.onclick= function(){
    answer= Math.floor(Math.random() * maxhard) + min;
    console.log("Answer:", answer);
    select.style.display= "none";
    guess.style.display= "block";
    enter.onclick= function(){
        x= input.value;
        if(x== answer){
            correct.textContent= `Your guess is correct`;
        }
        else{
            correct.textContent= `Your guess is wrong`
            value.textContent= `The answer is: ${answer}`
        }
    }
    back.onclick= function(){
        guess.style.display= "none";
        select.style.display= "block";
    }
    input.value= "";
    correct.textContent= "";
    value.textContent= "";
};

