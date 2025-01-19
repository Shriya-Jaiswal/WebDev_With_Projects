▶️ Music Player

👉 icon ko h3 me put krna 

👉 click event lagane pr console me pointerEvent milta hai and jo addEventListner me jo function hota hai usme jo perameter me jo details ki value hoti hai vo highly dependent hoti hai uss particuler eventListner pr 

👉 pointerEvent detail ne (inside browser's console) ek target property hoti hai jo ye btatai hai ki humne uss particuler element ko target kiya hai


allSongs.addEventListener("click", function(details){
    // console.log(details);
    // console.log(details.target);
    // console.log(details.target.id);
    // console.log(arr[details.target.id]); // 👉 arr ka poora particuler object pick ho kr print ho jayga
    // console.log(arr[details.target.id].url); // 👉 arr ka poora particuler object pick ho kr print ho jayga


    // audio.src = arr[details.target.id].url;
    selectedSong = details.target.id;
    // console.log(selectedSong);
    mainFunction();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1;
    audio.play(); 
})
