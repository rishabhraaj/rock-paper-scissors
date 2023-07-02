const score= JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    losses:0,
    tie:0
};

updateScoreElement();

function playGame(playerMove){
    const computerMove=pickComputerMove();
    let result='';

    

    if(playerMove==='Rock'){
        if(computerMove==="Rock"){
            result='Tie';
        }else if(computerMove==='Paper'){
            result='You Loose';
        }else if(computerMove==='Scissors'){
            result='You Win';
        }
    }else if(playerMove==='Paper'){
        if(computerMove==='Rock'){
            result='You Win';
        }else if(computerMove==='Paper'){
            result='Tie';
        }else if(computerMove==='Scissors'){
            result='You Loose';
        }
    }else if(playerMove==='Scissors'){
        if(computerMove==='Rock'){
            result='You Loose';
        }else if(computerMove==="Paper"){
            result='You Win';
        }else if(computerMove==='Scissors'){
            result='Tie';
        }
    }

    if(result==='You Win'){
        score.wins+=1;
    }else if(result==='You Loose'){
        score.losses+=1;
    }else if(result==='Tie'){
        score.tie+=1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    
    // Display Moves Picked by player and computer
    document.querySelector('.js-moves')
    .innerHTML=`  You 
<img src="images/${playerMove}-emoji.png" class="move-icon">

<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;

    // Display Result
    document.querySelector('.js-result').innerHTML=result;



    

}


function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML=`Wins: ${score.wins} , Losses: ${score.losses}, Tie: ${score.tie}`;
}



function pickComputerMove(){
    const randomNumber=Math.random();

    let computerMove='';

    if(randomNumber>0 && randomNumber<=1/3){
        computerMove='Rock';
    }else if(randomNumber>1/3 && randomNumber<=2/3){
        computerMove='Paper';
    }else{
        computerMove='Scissors';
    }

    return computerMove;
}