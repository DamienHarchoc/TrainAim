let left =  Math.floor(Math.random() * 90);
let high = Math.floor(Math.random() * 90);
let scorePoint = 0;
let play = document.getElementById('play');
play.onclick = () => {
    scorePoint = 0;
    circl.style.display = 'block';
    score.innerText = scorePoint;
    hide();
    if(document.getElementById('temp').classList.contains('hiden')) {
        document.getElementById('temp').classList.remove('hiden');

    }
}

circl.onclick = () => {
    left =  Math.floor(Math.random() * 90);
    high = Math.floor(Math.random() * 90);
    circl.style.left = `${left}%`;
    circl.style.top = `${high}%`;
    scorePoint += 1 ;
    score.innerText = scorePoint;
}
function hi() {
    circl.style.display = 'none';
}
function hide()
{
 //Traitement
 setTimeout(hi, 30000); //On attend 5 secondes avant d'exécuter la fonction
}