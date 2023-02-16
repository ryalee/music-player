 
let musics = [ // Array com os dados das musicas
    {titulo: 'Butterfy Effect', artista: 'Travis Scott', src:'music/Travis Scott - Butterfly Effect (audio) (320 kbps).mp3', img: 'images/capa astroworld.jpg'}, 
    {titulo: 'Goosebumps', artista: 'Travis Scott', src:'music/Travis Scott - Goosebumps.mp3', img: 'images/goosebumps.jpg'}, 
    {titulo: 'MAFIA', artista: 'Travis Scott', src:'music/Travis Scott - MAFIA (Official Audio) (320 kbps).mp3', img: 'images/MAFIA.jpg'}
];

let music = document.querySelector('audio');
let musicIndex = 0;

let musicImage = document.querySelector('img');

let musicName = document.querySelector('.musicInfo h2');
let artistName = document.querySelector('.musicInfo i');


// Events

document.querySelector('.btnPlay').addEventListener('click', playMusica);
document.querySelector('.btnPause').addEventListener('click', pausarMusica);

document.querySelector('.back').addEventListener('click', () => {
    musicIndex--;
    if(musicIndex < 0){
        musicIndex = 2;
    }

    renderMusic(musicIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    musicIndex++;
    if(musicIndex > 2){
        musicIndex = 0;
    }

    renderMusic(musicIndex);
});

music.addEventListener('timeupdate', songTime); 
music.addEventListener('loadeddata', duration);



// Functions

function renderMusic(index){
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        musicName.textContent = musics[index].titulo;
        artistName.textContent = musics[index].artista;
        musicImage.src = musics[index].img;  
        musicDuration.textContent = secTomin(Math.floor(music.duration));
    });
}

function playMusica(){
    music.play()
    document.querySelector('.btnPause').style.display = 'block';
    document.querySelector('.btnPlay').style.display = 'none';
}

function pausarMusica(){
    music.pause()
    document.querySelector('.btnPause').style.display = 'none';
    document.querySelector('.btnPlay').style.display = 'block';
}

function songTime(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((music.currentTime / music.duration) * 100)+ '%';

    let playedTime = document.querySelector('.start');
    playedTime.textContent = secTomin(Math.floor(music.currentTime));
}

function secTomin(segundos){
    let min = Math.floor(segundos / 60);
    let sec = segundos % 60;    
    
    if(sec < 10){
        sec = '0' + sec;
    }
    return min+':'+sec;
}

function duration(){
    let musicDuration = document.querySelector('.end');

    musicDuration.textContent = secTomin(Math.floor(music.duration));
}