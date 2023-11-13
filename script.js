countdown = 1;
function dCountdown(){
    if(countdown == 1){
        document.getElementById("dCountdown").innerHTML = "Enable Countdown";
        countdown = 0;
    }
    else{
        document.getElementById("dCountdown").innerHTML = "Disable Countdown";
        countdown = 1;
    }
    console.log(countdown);
}
function sCalculator() {
    window.location="index2.html";
}

function mTimer() {
    window.location="index.html";
}
//https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
countdownnoise = new Audio('Countdown.m4a');
sec = 3;
sc = 60;
function start(){
    if (sec==3){
        if(sc==60){
            if(countdown==1){
                sec = 3;
                timr = setInterval(function(){
                    document.getElementById('timer').innerHTML=sec+" Seconds";
                    if(sec>0){
                        countdownnoise.play();
                    }
                    sec--;
                    if (sec < 0) {
                        clearInterval(timr);
                    }
                    if (sec == 0) {
                        timer();
                    }
                }, 1000);
            }
            else{
                timer();
            }
        }
    }
}
//https://www.delftstack.com/howto/javascript/play-audio-javascript/
startsound = new Audio("Start Sound.m4a");
switchdrivers = new Audio("Switch Drivers.m4a");
stopsound = new Audio("Stop Sound.m4a");
function timer(){
    sc = 60;
    tir = setInterval(function(){
        document.getElementById('timer').innerHTML=sc+" Seconds";
        sc--;
        if (sc < 0) {
            clearInterval(tir);
        }
        if(sc == 59) {
            startsound.play();
        }
        if (sc == 34){
            switchdrivers.play();
        }
        if (sc == 24){
            switchdrivers.play()
        }
        if(sc == -1){
            stopsound.play();
        }
    }, 1000);
}
function stop(){
    stopsound.play();
    clearInterval(timr);
    clearInterval(tir);
}
function reset(){
    sec = 3;
    sc = 60;
    document.getElementById("timer").innerHTML=sc+" Seconds";
}
function cFields(){
    document.getElementById("rBlocks").value=0;
    document.getElementById("bScored").value=0;
    document.getElementById("uGoals").value=0;
    document.getElementById("fLevel").value=0;
    document.getElementById("sZone").value=0;
    document.getElementById("a1Parked").value=0;
    document.getElementById("a2Parked").value=0;
}
function cScore(){
    rBlocks = Number(document.getElementById("rBlocks").value);
    bScored = Number(document.getElementById("bScored").value);
    uGoals = Number(document.getElementById("uGoals").value);
    fLevel = Number(document.getElementById("fLevel").value);
    sZone = Number(document.getElementById("sZone").value);
    a1Parked = Number(document.getElementById("a1Parked").value);
    a2Parked = Number(document.getElementById("a2Parked").value);
    score = 0;
    score = rBlocks * 5;
    score = score + bScored;
    score = score + uGoals * 10;
    score = score + fLevel * 10;
    score = score + sZone * 20;
    score = score + a1Parked * 5;
    score = score + a2Parked * 5;
    if(a1Parked == 2){
        if(a2Parked == 2){
            score = score + 10;
        }
    }
    console.log(score);
    if(rBlocks>3){
        document.getElementById("score").innerHTML="Illegal Score: Only 3 Red Blocks";
    }
    else if(bScored>73){
        document.getElementById("score").innerHTML="Illegal Score: Only 73 Blocks";
    }
    else if(uGoals>3){
        document.getElementById("score").innerHTML="Illegal Score: Only 3 Goal Zones";
    }
    else if(fLevel>3){
        document.getElementById("score").innerHTML="Illegal Score: Only 3 Fill Levels";
    }
    else if(sZone>1){
        document.getElementById("score").innerHTML="Illegal Score: Only 1 Supply Zone";
    }
    else if(a1Parked>2){
        document.getElementById("score").innerHTML="Illegal Score: A Robot Can Only Be Fully Parked";
    }
    else if(a2Parked>2){
        document.getElementById("score").innerHTML="Illegal Score: A Robot Can Only Be Fully Parked";
    }
    else if(uGoals==1){
        if(bScored<2){
            document.getElementById("score").innerHTML="Illegal Score: 2 Blocks + Per Uniform Goal";
        }
        else{
            document.getElementById("score").innerHTML="Score: "+score;
        }
    }
    else if(uGoals==2){
        if(bScored<4){
            document.getElementById("score").innerHTML="Illegal Score: 2 Blocks + Per Uniform Goal";
        }
        else{
            document.getElementById("score").innerHTML="Score: "+score;
        }
    }
    else if(uGoals==3){
        if(bScored<6){
            document.getElementById("score").innerHTML="Illegal Score: 2 Blocks + Per Uniform Goal";
        }
        else{
            document.getElementById("score").innerHTML="Score: "+score;
        }
    }
    else if(fLevel==1){
        if(bScored<3){
            document.getElementById("score").innerHTML="Illegal Score: 1 Block + Per Goal";
        }
        else{
            document.getElementById("score").innerHTML="Score: "+score;
        }
    }
    else if(fLevel==2){
        if(bScored<3){
            document.getElementById("score").innerHTML="Illegal Score: 1 Block + Per Goal";
        }
        else{
            document.getElementById("score").innerHTML="Score: "+score;
        }
    }
    else if(fLevel==3){
        if(bScored<9){
            document.getElementById("score").innerHTML="Illegal Score: 3 Block + Per Goal";
        }
        else{
            document.getElementById("score").innerHTML="Score: "+score;
        }
    }
    else{
        document.getElementById("score").innerHTML="Score: "+score;
    }
}