var Player=document.getElementById('player');
var Score= document.getElementById('score');
var Timer=document.getElementById('timer');
var RealTimer=20
var RealScore=0
var IntervalCounter=500
var TimeLineSound=new Audio();
TimeLineSound.src='sound/1.webm';

var TochCubeSound=new Audio();
TochCubeSound.src='sound/2.webm';

document.body.addEventListener('click', function(){
    TimeLineSound.play();
})

var interval=setInterval(StartTimer, IntervalCounter);



Player.addEventListener('click', function(){
    TochCubeSound.play();
    RealScore++;
    Score.textContent='Score:'+ " " + RealScore;
    RealTimer+=1;
    Timer.textContent='Timer' + " " + RealTimer

    var RandomPosX=Math.floor(Math.random()*500);
    var RandomPosY =Math.floor(Math.random()*550);
    var RandomScale=Math.floor(Math.random()*100);

    if(RandomScale < 10){
        RandomScale =20;
        Player.style.width=RandomScale + 'px';
        Player.style.height=RandomScale + 'px';
    }

    Player.style.marginLeft=RandomPosX + 'px';
    Player.style.marginTop=RandomPosY + 'px';
    Player.style.width=RandomScale + 'px';
    Player.style.height=RandomScale + 'px';
})

function StartTimer(){
    RealTimer --;
    Timer.textContent='Timer:' + " " + RealTimer;

    if (RealTimer < 1) {
        EndGame();
    }
}

function StopTimer(){

}

function EndGame(){
    Swal.fire("time out"+ " " + "Your Score is" + " " + RealScore )
    clearInterval(interval);
}
