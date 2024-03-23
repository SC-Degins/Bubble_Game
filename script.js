var click = document.getElementById("music");
function Makebubble(){
    var a ="";
    for(var i=1; i<=153; i++){
        var num = Math.floor(Math.random()*20);
        a += `<div class="bubble" id="hover">${num}</div>`;    
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
var timer = 30;
var count = document.querySelector("#count");
function Timeout(){
    var timerint = setInterval(function(){
        if (timer > 0) {
          timer--;
          document.querySelector(".timer").textContent = timer;
          if (timer <= 10){
            document.querySelector(".timer").style.color = "red";
            count.play();
          }
        } else {
          clearInterval(timerint);
          document.querySelector(
            "#panel-bottom"
          ).innerHTML = `<h1 class="over">Game Over <br> Your Final Score is = ${score}</h1>`;
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
    getNewHit();
    Makebubble(color_plate);
    
}
})
var mymusic = document.querySelector("#mymusic");
var icons = document.querySelector("#icons");
var icon = document.querySelector("#icon");
icon.onclick = function(){
    if(mymusic.paused){
    mymusic.play();
    icon.innerHTML = `<i id="icon" class="ri-volume-up-line"></i>`;
    }else{
        mymusic.pause();
        icon.innerHTML = `<i id="icon" class="ri-volume-mute-line"></i>`;
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
var flag = 0;
var setting = document.querySelector("#setting");
setting.addEventListener("click", function(){
    if(flag === 0){
        document.querySelector("#setting").style.rotate = "175deg";
        document.querySelector("#setiing-div").style.scale = "1";
        document.querySelector(".overlay").style.display = "block";
        flag = 1;
    } else {
        document.querySelector("#setiing-div").style.scale = "0";
        document.querySelector(".overlay").style.display = "none";
        document.querySelector("#setting").style.rotate = "0deg";
        flag = 0;
    }
});
document.querySelector(".overlay").addEventListener("click", function(){
    document.querySelector("#setiing-div").style.scale = "0";
    document.querySelector(".overlay").style.display = "none";
    document.querySelector("#setting").style.rotate = "0deg";
    flag = 0;
})
var colors = document.querySelectorAll(".color");
document.getElementById("color").style.border = "3px solid #000";
document.querySelectorAll(".bubble").forEach(function(el){
    el.style.background = "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)";
});
function color(){
colors.forEach(function(e){
    e.addEventListener("click", function(el){
        border();
        var color = el.target.textContent;
        el.target.style.border = "3px solid #000";
        document.querySelectorAll(".bubble").forEach(function(elem){
           var color_plate = elem.style.background = color;
        })
    })
});
};
color();
function border(){
    document.querySelectorAll(".color").forEach(function(elem){
        elem.style.border = "none";
    })
}
