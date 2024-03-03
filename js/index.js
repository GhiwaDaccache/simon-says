const play = document.getElementById('play');

play.addEventListener('click', function(){
    console.log('1')
    const active = document.querySelector('.unclickable');
    active.classList.remove('unclickable');
}
)