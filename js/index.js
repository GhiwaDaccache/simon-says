const play = document.getElementById('play');
const choices = ['green', 'red', 'yellow', 'blue'];
const randomChoice = choices[Math.floor(Math.random() * choices.length)]; 
const tiles = document.querySelectorAll('.tile');
let pattern = [];
let userPattern = [];
let counter = 0


play.addEventListener('click', function(){
    const active = document.querySelector('.unclickable');
    active.classList.remove('unclickable');
}
)

function generatePattern(){
    pattern.push(randomChoice);
    console.log(randomChoice)
}
generatePattern()

for(let i=0; i<choices.length; i++ ){
    const tile = tiles[i]
    tile.addEventListener('click', function(){
        userPattern.push(tile.dataset.tile)
        console.log(tile.dataset.tile)
        console.log(userPattern)
})
}