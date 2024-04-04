// TODO: Raw JavaScript
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
var score = 0;
function scoreincrese() {
  score += 10;
  document.querySelector(".score").textContent = score;

  // Check if highScore is in localStorage, if not, set it to 0
  let highScore = parseInt(localStorage.getItem("highScore")) || 0;

  if (score > highScore) {
    localStorage.setItem("highScore", score);
    document.querySelector("#high-score").innerHTML = score; // Corrected the ID here
  }
}
var scoreRemember = () => {
  document.querySelector("#heigh-score").innerHTML =
    localStorage.getItem("highScore") || 0; // Default to 0 if highScore is not set
};
var timer = 20;
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
          document.querySelector("#panel-bottom").innerHTML = `<h1 class="over">Game Over <br> Your Final Score is = ${score}</h1>`;
        }
    },1000)
}
document.querySelector("#panel-bottom").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        document.querySelector("#panel-error").style.display = "none";
        getNewHit();
        Makebubble();
        scoreincrese();
        hovereffect();
}
    else if (clickedNum !== hitrn) {
        document.querySelector("#eror").play();
        document.querySelector("#panel-error").style.display = "block";
    }
})
var mymusic = document.querySelector("#mymusic");
var icon = document.querySelector("#icons");
icon.onclick = function(){
    if(mymusic.paused){
    mymusic.play();
    icon.innerHTML = `<i id="icon" class="ri-volume-up-line"></i>`;
    }else{
        mymusic.pause();
        icon.innerHTML = `<i id="icon" class="ri-volume-mute-line"></i>`;
    }
}
var loader = document.querySelector("#loader-template");
var btn = document.querySelector(".btn");
function loaderup(){
btn.addEventListener("click", function(){
    loader.style.top = "-110%";
    gsap.from(".bubble", {
      y: 550,
      scale:1.2,
      stagger: 0.05,
      duration: 0.1,
      onComplete: Timeout
    });
    
})
}
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
var colors = document.querySelectorAll("#color-plate .color");
function color(){
colors.forEach(function(e){
    e.addEventListener("click", function(el){
        border();
        var color = el.target.textContent;
        el.target.style.border = "3px solid #000";
    })
});
};
function border(){
    document.querySelectorAll(".color").forEach(function(elem){
        elem.style.border = "none";
    })
}
colors.forEach(function(e){
    e.addEventListener("click", function(el){
        border();
        localStorage.removeItem("theme");
        el.target.style.border = "3px solid #000";
        document.body.setAttribute("theme", e.dataset.colour)
        localStorage.setItem("theme", e.dataset.colour);
    })
});
function reLoad(){
    document.querySelector(".reload").addEventListener("click", function(){
        window.location.reload();
    })
}

var themesaver = ()=>{
document.body.setAttribute("theme", localStorage.getItem("theme"));
}
var volumeControler = ()=> {
    const volumeInput = document.getElementById("volume");
    const audio = document.getElementById("mymusic");

    volumeInput.addEventListener("input", function () {
      const volume = volumeInput.value / 100;
      audio.volume = volume;
    });
}
function hovereffect() {
  document.querySelectorAll(".bubble").forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      this.style.scale = "0.9";
    });
    element.addEventListener("mouseout", function () {
        this.style.scale = "1";
    });
  });
}

//TODO: gsap
var tl = gsap.timeline();
tl.from("#loader",{
    scale: 0,
    duration: 1,
    delay: 0.5,
    ease: Power4
});
tl.from("#h-score", {
  y: -150,
  opacity: 0,
  duration: 0.4,
  ease: "power3.ease-out",
});
tl.from("#game-heading", {
  y: 150,
  duration: 0.8,
});
tl.from("#opacity-text",{
    opacity: 0,
    duration: 0.5
})
tl.to(".btn", {
  opacity: 1,
  duration: 0.5,
  scale:1
});
tl.to("#setting",{
    opacity: 1,
    rotate:900,
    duration: 0.7
});

// TODO: Function Calling
themesaver();
reLoad();
color();
loaderup();
Makebubble();
getNewHit();
scoreRemember();
volumeControler();
hovereffect();