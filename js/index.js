const play = document.getElementById('play');
const choices = ['green', 'red', 'yellow', 'blue'];
const randomChoice = choices[Math.floor(Math.random() * choices.length)]; 
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
    pattern.push(randomChoice);
    console.log(randomChoice);
    clicksCounter = 0;
    
    //CHANGE TO LIGHT ON TILE
}

function saveUserPattern(){
    for(let i=0; i<choices.length; i++ ){
        const tile = tiles[i];
        tile.addEventListener('click', function(){
            userPattern.push(tile.dataset.tile);
            console.log(userPattern);
            clicksCounter += 1;
            console.log(clicksCounter);
            console.log(pattern.length);
            if (clicksCounter == pattern.length){
                console.log('if');
                active.classList.add('unclickable');
                main();
            }
        })
    }   
}
saveUserPattern()

//active.classList.remove('unclickable');
function main(){
    console.log('main');
    console.log(pattern)
    console.log(userPattern)
    if(userPattern == pattern){
        console.log('ho');
        counter += 1;
        generatePattern();
        

        if(counter == 12){
            alert('Congrats! You won at Simon says');
        }
        else{
            alert('Oh oh! you missed');
            //RESET THE GAME
        }
    }
    

}









