function Makebubble(){
    var a ="";
    for(var i=1; i<=156; i++){
        var num = Math.floor(Math.random()*10);
        a += `<div class="bubble">${num}</div>`;    
    }
    document.querySelector("#panel-bottom").innerHTML = a;
}
var hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector(".number").innerHTML = hitrn;
}
var timer = 60;
function Timeout(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector(".timer").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#panel-bottom").innerHTML = `<h1 class="over">Game Over</h1>`;
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
    icon.src = "paused.webp";
    }else{
        mymusic.pause();
        icon.src = "play.png";
    }
}

Timeout();
Makebubble();
getNewHit();