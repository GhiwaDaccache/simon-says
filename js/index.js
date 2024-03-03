const play = document.getElementById('play');
const choices = ['green', 'red', 'yellow', 'blue'];
const randomChoice = choices[Math.floor(Math.random() * choices.length)]; 
const tiles = document.querySelectorAll('.tile');
const active = document.querySelector('.unclickable')
let pattern = [];
let userPattern = [];
let counter = 0


play.addEventListener('click', function(){
    active.classList.remove('unclickable');
    generatePattern()
}
)

function generatePattern(){
    pattern.push(randomChoice);
    console.log(randomChoice);
    //CHANGE TO LIGHT ON TILE
}

function saveUserPattern(){
    for(let i=0; i<choices.length; i++ ){
        const tile = tiles[i];
        tile.addEventListener('click', function(){
            userPattern.push(tile.dataset.tile);
            console.log('userPattern: '+userPattern)
            counter += 1;
            console.log('counter: ' + counter)
            console.log('pattern length: ' + pattern.length)
            if (counter == pattern.length){
                active.classList.add('unclickable');
            }
    })
    }
    
}

saveUserPattern()



