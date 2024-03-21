var click = document.getElementById("music");
function Makebubble(){
    var a ="";
    for(var i=1; i<=156; i++){
        var num = Math.floor(Math.random()*20);
        a += `<div class="bubble">${num}</div>`;    
    }
    document.querySelector("#panel-bottom").innerHTML = a;
    document.querySelector("#panel-bottom").addEventListener("click",function(){
        click.play();
    })
}
var hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random() * 20);
    document.querySelector(".number").innerHTML = hitrn;
}
var timer = 15;
function Timeout(color){
    document.querySelector(".timer").style.color = color;
    var timerint = setInterval(function(){
        if (timer > 10) {
          timer--;
          document.querySelector(".timer").textContent = timer;
        } else if (timer < 9) {
          Timeout("red");
          timer--;
          document.querySelector(".timer").textContent = timer;
        } else {
          clearInterval(timerint);
          document.querySelector(
            "#panel-bottom"
          ).innerHTML = `<h1 class="over">Game Over</h1>`;
        }
    },1000)
}
var score = 0;
function scoreincrese(){
    score += 10;
    document.querySelector(".score").textContent = score ;
}
document.querySelector("#panel-bottom").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
    scoreincrese();
    Makebubble();
    getNewHit();
}
})
var mymusic = document.querySelector("#mymusic");
var icon = document.querySelector("#icon");
icon.onclick = function(){
    if(mymusic.paused){
    mymusic.play();
    icon.src = "pause1.png";
    }else{
        mymusic.pause();
        icon.src = "play1.png";
    }
}

// gsap
var loader = document.querySelector("#loader-template");
var btn = document.querySelector(".btn");
function loaderup(){
btn.addEventListener("click", function(){
    loader.style.top = "-110%";
    Timeout();
})
}
loaderup();
Makebubble();
getNewHit();