let menu = document.querySelector("#nav i");
let cross =  document.querySelector("#full i")

let tl = gsap.timeline();
// let tl = gsap.timeline({paused : true}); // 👉 {paused:true} se without comment kiye bhi timeline wala code nahi chaelga pause ho jayga

tl.to("#full",{
    right : 0,
    duration : 0.3,
})

tl.from("#full h4",{
    x : 150,
    duration :0.4,
    stagger : 0.1,
    opacity : 0
})

tl.from("#full i",{
    opacity : 0,

})

tl.pause()

menu.addEventListener("click", function(){
    tl.play();
})

cross.addEventListener("click", function(){
    tl.reverse();
})


