const play = document.getElementById('play');
const choices = ['green', 'red', 'yellow', 'blue'];
const tiles = document.querySelectorAll('.tile');
const active = document.querySelector('.unclickable');
let pattern = [];
let userPattern = [];
let counter = 0;
let clicksCounter = 0;

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
    if(counter == 12){
        alert('Congrats! You won at Simon says');
        return;
    }
    
    for (let i=0; i<pattern.length; i++){
        console.log('user pattern i: ' + userPattern[i])
        console.log('pattern i: ' + pattern[i])
        console.log('counter: ' + counter)

        if(userPattern[i] != pattern[i]){
            console.log('player input: '+ userPattern);
            alert('Oh oh! you missed'); 
            //reset game
            return 
        }
    }
    if(counter==12){
        alert('Congrats! You won Simon says')
    }
    else{
        counter += 1;
        generatePattern()
    }

}


    











