// 👉 ek array hoga ---> jisme objects honge and each object me kuch data hoga, like ---> image and name 

let arr = [
    {name:"petals of roses", image : "https://images.unsplash.com/photo-1550593854-87edb352e3be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvc2VzfGVufDB8fDB8fHww"},
    {name:"king of forest", image : "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QW5pbWFsfGVufDB8fDB8fHww"},
    {name:"innocent dear", image : "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW5pbWFsfGVufDB8fDB8fHww"},
    {name:"the crowd of the city", image : "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNpdHl8ZW58MHx8MHx8fDA%3D"},
    {name:"web design", image : "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"cherry", image : "https://media.istockphoto.com/id/1326746612/photo/red-cherries-on-hand.webp?b=1&s=170667a&w=0&k=20&c=w0KiubtJIOqCFHrb7lLirt7fomhU5c5V14Pkn56bMP8="},
    {name:"Cat", image : "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHx8MA%3D%3D"},
    
];

function showTheCards(){
    var clutter="";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image not found">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    });

    // console.log(clutter);
    document.querySelector(".container").innerHTML = clutter;
}


function handleSearchFunctionality(){
    // document.querySelector(".overlay").style.display = "block";

    let input = document.querySelector("#searchinput");

    input.addEventListener("focus", function(){
        // console.log("hey");
        document.querySelector(".overlay").style.display = "block";
    })
    input.addEventListener("blur", function(){
        // console.log("hey");
        document.querySelector(".overlay").style.display = "none";
    })

    input.addEventListener("input", function(){
        // console.log("written");
        // console.log(input.value === ' ');
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        console.log(filteredArray);

        let clutter = "";
        filteredArray.forEach(function(obj){
            clutter += ` <div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold" >${obj.name}</h3>
        </div>`
        })

        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;

    })
}

handleSearchFunctionality();
showTheCards();
