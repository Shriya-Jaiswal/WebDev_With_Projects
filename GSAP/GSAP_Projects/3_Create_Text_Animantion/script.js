function breakText(){
    let h1 = document.querySelector("h1");
    let h1Text = h1.textContent
    // console.log(h1Text);
    let splitedText = h1Text.split("");
    // console.log(splitedText);
    let halfvalue = Math.floor(splitedText.length/2);
    let clutter = "";
    splitedText.forEach(function(e,idx){
        if(idx < halfvalue){
            clutter = clutter + `<span class="char1">${e}</span>`
        }
        else{
            clutter = clutter + `<span class="char2">${e}</span>`
        }
    })
    // console.log(clutter);
    h1.innerHTML = clutter;
}

breakText();


// 👉 gsap code for direct h1 span
// gsap.from("h1 span",{
//     y : 50,
//     opacity : 0,
//     duration : 0.8,
//     delay : 0.5,
//     // stagger : -0.15, // 👉 reverse se animation hoga like right to left
//     stagger : 0.15 // 👉 Animation left to right hoga 

// })


gsap.from("h1 .char1",{
    y : 50,
    duration : 0.6,
    delay : 0.5,
    opacity : 0,
    stagger : 0.15 // 👉 Animation left to right hoga 
})

gsap.from("h1 .char2",{
    y : 50,
    duration : 0.6,
    delay : 0.5,
    opacity : 0,
    stagger : -0.15, // 👉 reverse se animation hoga like right to left
})


