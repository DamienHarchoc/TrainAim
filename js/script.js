let left =  Math.floor(Math.random() * 90);
let high = Math.floor(Math.random() * 90);
let scorePoint = 0;
let play = document.getElementById('play');
play.onclick = () => {
    scorePoint = 0;
    circle.style.display = 'block';
    score.innerText = scorePoint;
    hide();
    if(document.getElementById('temp').classList.contains('hiden')) {
        document.getElementById('temp').classList.remove('hiden');

    }
}

circle.onclick = () => {
    left =  Math.floor(Math.random() * 90);
    high = Math.floor(Math.random() * 90);
    circle.style.left = `${left}%`;
    circle.style.top = `${high}%`;
    scorePoint += 1 ;
    score.innerText = scorePoint;
}
function hi() {
    circle.style.display = 'none';
}
function hide()
{
 //Traitement
 setTimeout(hi, 30000); //On attend 5 secondes avant d'exécuter la fonction
}
