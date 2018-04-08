

//declaring variables
var win = 0;
var loss = 0;

var pokeBall = 0;
var greatBall = 0;
var ultraBall = 0;
var masterBall = 0;
var score = 0;
var goal = 0;

//function to set point goal
function rng120(){
    goal = Math.floor((Math.random() * 101) + 19);
    console.log(goal);
    $("#score").text(goal);
};



//random number generating functions
function rngPoke(){
    pokeBall = Math.floor((Math.random() * 11) + 1);
    console.log("pokeValue " + pokeBall);
}

function rngGreat(){
    greatBall = Math.floor((Math.random() * 11) + 1);
    console.log("greatValue " + greatBall);
}
function rngUltra(){
    ultraBall = Math.floor((Math.random() * 11) + 1);
    console.log("ultraValue " + ultraBall);
}
function rngMaster(){
    masterBall = Math.floor((Math.random() * 11) + 1);
    console.log("masterValue " + masterBall);
}


//gameStart function
function gameStart(){

    pokeBall = 0;
    greatBall = 0;
    ultraBall = 0;
    masterBall = 0;
    score = 0;
    goal = 0;
    
    rng120();
    rngPoke();
    rngGreat();
    rngUltra();
    rngMaster();
    $('#scoreBox').text("Your Score is: "+ score);

}


gameStart();

//onclick action
$('#crystal-one').click(function(){
    score = score + pokeBall;
    $('#scoreBox').text("Your Score is: " + score);
    
    if (score === goal){
        alert("You win!");
        win++;
        $("#wins").text("Wins: " + win);
        gameStart();
      
    
    }

    else if(score > goal){
        alert("You lose!");
        loss++;
        $("#losses").text("Losses: " + loss);

        gameStart();

    }
    console.log(score);

});

$('#crystal-two').click(function(){
    score = score + greatBall;
    $('#scoreBox').text("Your Score is: " + score);
    
    if (score === goal){
        alert("You win!");
        win++;
        $("#wins").text("Wins: " + win);
        gameStart();
      
    
    }

    else if(score > goal){
        alert("You lose!");
        loss++;
        $("#losses").text("Losses: " + loss);

        gameStart();

    }
    console.log(score);

});

$('#crystal-three').click(function(){
    score = score + ultraBall;
    $('#scoreBox').text("Your Score is: " + score);
    
    if (score === goal){
        alert("You win!");
        win++;
        $("#wins").text("Wins: " + win);
        gameStart();
      
    
    }

    else if(score > goal){
        alert("You lose!");
        loss++;
        $("#losses").text("Losses: " + loss);

        gameStart();

    }
    console.log(score);

});

$('#crystal-four').click(function(){
    score = score + masterBall;
    $('#scoreBox').text("Your Score is: " + score);
    
    if (score === goal){
        alert("You win!");
        win++;
        $("#wins").text("Wins: " + win);
        gameStart();
      
    
    }

    else if(score > goal){
        alert("You lose!");
        loss++;
        $("#losses").text("Losses: " + loss);

        gameStart();

    }
    console.log(score);

});
