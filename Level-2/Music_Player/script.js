let arr = [
    {songName:"Arjan Vailly Ne", url:"./songs/Arjan Vailly Ne.mp3", img:"./images/animal.jpg", duration:"3:02"},
    {songName:"Jale 2", url:"./songs/Jale 2.mp3", img:"./images/jale.jpg", duration:"2:39"},
    {songName:"Pehle Bhi Main", url:"./songs/Pehle Bhi Main.mp3", img:"./images/animal.jpg",duration:"4:10"},
    {songName:"Ram Siya Ram", url:"./songs/Ram Siya Ram.mp3", img:"./images/ram.jpg",duration:"3:50"},
];

// console.log(arr);

let allSongs = document.querySelector("#all-songs");
let poster = document.querySelector("#left");

let play = document.querySelector("#play");
let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");

let songRunner = document.getElementById('songRunner');

let audio = new Audio();

let selectedSong = 0;

function mainFunction(){
    let clutter = "";
    arr.forEach(function(elem,idx){
        // console.log(elem);
        // console.log(elem.songName);
        clutter += ` <div class="song-card" id=${idx}>
                    <div class="part1">
                        <img src=${elem.img} alt="">
                        <h2>${elem.songName}</h2>
                    </div>
                    <h6>${elem.duration}</h6>
                </div>`;
    });

    // console.log(clutter);

    allSongs.innerHTML = clutter;
    audio.src = arr[selectedSong].url;
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}

mainFunction(); 

allSongs.addEventListener("click", function(details){
    selectedSong = details.target.id;
    mainFunction();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1;
    audio.play(); 
})


// // 👉 add play , backward , forward functionailty

// let flag = 0;

// play.addEventListener("click", function(){
//     if(flag == 0){
//         play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
//         mainFunction(); 
//         audio.play();
//         flag = 1;
//     }
//     else{
//         play.innerHTML = `<i class="ri-play-mini-fill"></i>`
//         mainFunction();
//         audio.pause();
//         flag = 0;
//     }
// })


// // 👉 add play-pause functionailty and resuming the song working fine


let isPlaying = false;
let resumeTime = 0;

// 👉 Function to toggle play/pause
function togglePlayPause() {
  if (isPlaying) {
      audio.pause();
      isPlaying = false;
    //   play.textContent = 'Play';
      play.innerHTML = `<i class="ri-play-mini-fill"></i>`
      resumeTime = audio.currentTime;
  } 
  else {
      audio.play();
      isPlaying = true;
      play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
      // play.textContent = 'Pause';
      if (resumeTime > 0) {
      audio.currentTime = resumeTime;
      }
    }
}

play.addEventListener('click', togglePlayPause);



// ▶️ forward functionality

forward.addEventListener("click", function(){
    if(selectedSong < arr.length - 1 ){
        selectedSong++;
        mainFunction();
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        flag = 1;
        audio.play(); 
        backward.style.opacity = 1;
    }
    else {
        forward.style.opacity = 0.4;
    }
})

// ▶️ backward functionality

backward.addEventListener("click", function(){
    if(selectedSong > 0 ){
        selectedSong--;
        mainFunction();
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        flag = 1;
        audio.play(); 
        forward.style.opacity = 1;
    }
    else{
        backward.style.opacity = 0.4; 
    }
})


// ▶️ add functionality of song runner 

audio.addEventListener('timeupdate',function(){
    // 👉 Update the value of the song runner/track to match the current time of the audio
    songRunner.value = audio.currentTime;
});

// 👉 Add input event listener to the song runner/track input element
songRunner.addEventListener('input', function() {
    // 👉 Update the current time of the audio to match the value of the song runner/track
    audio.currentTime = songRunner.value;
});
