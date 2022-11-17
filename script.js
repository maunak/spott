const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ["Instant crush-Daft Punk","Can't have everything-Drake","Follow God-Kanye West","Mirrors-Justin Timberlake","Daze Inn-Carlie Hanson",
                 "Snowman-Arizona Zervas","Just Like You-Louis Tomlinson","Wake Up-The Vamps"
                ,"Just Hold On-Steve Aoki","Starboy-The Weeknd","Reminder-The Weeknd","The Hills-The Weeknd",
                "Can't Feel my Face-The Weeknd","I Feel it Coming-The Weeknd","In the Night-The Weeknd","Party Monster-The Weeknd","Heartless-The Weeknd","Blinding Lights-The Weeknd",
                "After Hours","Call out my Name","Unforgettable","iSPY","Silence","The Nights","Dusk Till Dawn","Pillowtalk","Still got Time",
                "Stargazing-Travis Scott","Highest in the room--Travis Scott","BUTTERFLY EFFECT-Travis Scott","Wake up","SICKO MODE-Travis Scott","Yosemite-Travis Scott"
                ,"Can't Say-Travis Scott","Some Way-NAV","No Idea-Don Toliver","Swang-Rae Sremmurd",
                "Circles-Post Malone","WOW-Post Malone","Goodbyes-Post Malone","Candy Paint-Post Malone","Saint Tropez-Post Malone","White Iversion-Post Malone",
                "Congratulations-Post Malone","Pyscho-Post Malone",
                "Don't you need somebody-Redone","Mirrors-Justin Timberlake"];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = `${song} `;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous Song
function prevSong(){
    songIndex--;

    if(songIndex<0){
        songIndex = songs.length-1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong(){
    songIndex++;

    if(songIndex>songs.length-1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Update progress
function updateProgress(e){
    const{duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime/duration)*100;
    progress.style.width = `${progressPercent}%`;
}

// Set Progress
function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX/width)*duration;

}

// Event Listeners
playBtn.addEventListener('click', function() {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });
  
prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);

audio.addEventListener('timeupdate',updateProgress);

progressContainer.addEventListener('click',setProgress);

audio.addEventListener('ended',nextSong);



// Hamburger
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger-menu");


// event listeners
hamburger.addEventListener('click',()=>{
    navbar.classList.toggle('change');
});


clickfunc = function(text) {
   let clickText = text.innerText ;

   const index = songs.indexOf(clickText);
  
   loadSong(songs[index]);
   playSong();

}
