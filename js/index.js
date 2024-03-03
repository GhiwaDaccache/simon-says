const play = document.getElementById('play');
const choices = ['green', 'red', 'yellow', 'blue'];
const tiles = document.querySelectorAll('.tile');
const active = document.querySelector('.unclickable');
let level = document.getElementById('level');
let highScore = document.getElementById('high-score');

let pattern = [];
let userPattern = [];
let counter = 1;
let clicksCounter = 0;


function reset(){
    pattern = [];
    userPattern = [];
    counter = 1;
    clicksCounter = 0;
    level.innerHTML = 0;
}


play.addEventListener('click', function(){
    active.classList.remove('unclickable');
    generatePattern();
}
)

function generatePattern(){
    let randomChoice = choices[Math.floor(Math.random() * choices.length)]; 
    pattern.push(randomChoice);
    console.log('new input cmp: '+ randomChoice)
    console.log('new pattern: ' + pattern)
    clicksCounter = 0;
    userPattern = []
    active.classList.remove('unclickable');
    
    //CHANGE TO LIGHT ON TILE
}

function saveUserPattern(){
    for(let i=0; i<choices.length; i++ ){
        const tile = tiles[i];
        tile.addEventListener('click', function(){
            userPattern.push(tile.dataset.tile);
            clicksCounter += 1;
            if (clicksCounter == pattern.length){
                active.classList.add('unclickable');
                main();
            }
        })
    }   
}


saveUserPattern();



function main(){
    for (let i=0; i<pattern.length; i++){

        if(userPattern[i] != pattern[i]){
            alert('Oh oh! you missed'); 
            reset()
            return 
        }
    }
    if(counter==12){
        alert('Congrats! You won Simon says')
        reset()
        return
    }
    else{
        level.innerHTML = counter; 

        if(highScore.innerHTML < level.innerHTML){
            highScore.innerHTML = counter;
        }
        counter += 1;
        generatePattern()
    }

}


    











