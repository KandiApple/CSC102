function play_21s() {
    console.log("play_21s() started");
    var card1 = Math.ceil(Math.random() * 15); //selected random number between 0 and 1, multiply by 15 and rounded to the nearest number for 1st card//
    var card2 = Math.ceil(Math.random() * 17); //selected random number between 0 and 1, multiply by 17 and rounded to the nearest number for 2nd card//
    var sum = card1 + card2; //adds both the 1st and 2nd dice numbers//
    document.getElementById("card1Res").innerHTML = card1; //shows the variable of the 1st card on the website//
    document.getElementById("card2Res").innerHTML = card2; //shows the variable of the 2nd card on the website//
    document.getElementById("sum1Res").innerHTML = sum; //shows the sum of the 2 card on the webiste//
    if (sum == 16 || sum == 21) {
        document.getElementById("final1Res").innerHTML =
            "21 - you win"; //if the sum of the card is 15 or 17, there will be a message saying "21 - you lose" underneath the sum//
    }
    else if (card1 == card2 && card1 % 2 == 0) {
        document.getElementById("final1Res").innerHTML =
            "Flip - you lose"; //if the 1st and 2nd card 
    }
    else {
        document.getElementById("final1Res").innerHTML =
            "Flip - you lose, please try again!";

    }
}

function btrBlastOff() { //starting a "better" blastoff function that replaces previous version via looping//
    console.log("btrBlastOff() started");
    var currTime = 10; //setting countdown timer to 10 per UAT Space Program instuctions//
    for (var i = 0; i < 10; i = i + 1) { //this is the looping function, where it starts off at 0, doesn't go more than 10 and each time it goes up by 1. there will be 10 loops in total.//
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = currTime
            currTime = currTime - 1; //this starts the countdown timer at 10 and decreases it by 1 seconds//
        }, 1000 * i); //this represents 1 seconds per loop//
    }
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!" //this represents when it hits 0 seconds, or passes 10 seconds, the message will say "Blastoff"//
    }, 10000);

}