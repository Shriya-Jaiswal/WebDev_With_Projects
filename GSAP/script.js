// gsap.to("#box1",{
//     x : 1000,
//     duration:2,
//     delay : 1
// })
// gsap.to("#box2",{
//     x : 500,
//     y: 500,
//     duration:2,
//     delay : 1
// })

// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay : 1,
//     rotate : 360,
//     backgroundColor : "blue",
//     borderRadius : "50%",
//     // scale : 0.5
// })

// gsap.from("#box2",{
//     x:1200,
//     duration:2,
//     delay : 1,
//     rotate : 360,
//     backgroundColor : "crimson",
//     borderRadius : "50%",
// })

// gsap.to("h1",{
//     color : "red",
//     duration : 2,
//     delay : 1
// })

// gsap.from("h1",{
//     // color : "red",
//     opacity : 0,
//     y : 20,
//     duration : 2,
//     delay : 1,
//     stagger : -1
// })

// gsap.to("#box",{
//     x : 1200,
//     duration : 1,
//     delay  :1,
//     rotate  : 360,
//     repeat : -1 , // 👉 for infinite repeatation
//     yoyo : true
// })


// gsap.to("#box1",{
//     x : 1200,
//     rotation : 360,
//     duration : 1.5,
//     delay : 1
// })

// gsap.to("#box2",{
//     x : 1200,
//     backgroundColor : "yellow",
//     duration : 1.5,
//     delay : 2.5
// })

// gsap.to("#box3",{
//     x : 1200,
//     scale : 0.5,
//     borderRadius : "50%",
//     duration : 1.5,
//     delay : 4
// })


// 👉 TimeLine

// var tl = gsap.timeline()

// tl.to("#box1",{
//     x : 1200,
//     duration : 1.5,
//     delay : 1,
//     rotation : 360
// })


// tl.to("#box2",{
//     x : 1200,
//     duration : 1.5,
// })

// tl.to("#box3",{
//     x : 1200,
//     duration : 1.5,
// })


// 👉 nav

// let tl = gsap.timeline();

// tl.from("h2",{
//     y : -20,
//     opacity : 0,
//     duration : 1,
//     delay : 0.5
// })

// tl.from("h4",{
//     y : -20,
//     opacity : 0,
//     duration : 1,
//     stagger : 0.3
// })


// tl.from("h1",{
//     y : 20,
//     opacity : 0,
//     duration : 1.5,
//     scale : 0.2  
// })



// gsap.from("#page1 #box",{
//     scale : 0,
//     delay : 1,
//     duration : 2,
//     rotation : 360
// })


// gsap.from("#page2 #box",{
//     scale : 0,
//     opacity : 0,
//     // delay : 1,
//     duration : 1,
//     rotation : 720,
//     // scrollTrigger : "#page2 #box" // 👉 shortcut
//     scrollTrigger : {
//         trigger:"#page2 #box",
//         scroller : "body", 
//         markers : true,
//         start : "top 60%",
//         end : "top 30%",
//         scrub :  2 , // true, // : 👉 we can give true, false, or any number from 1 to 5 depending upon the smoothness Animation while scrolling
//         pin : true
//     }
// })

// gsap.from("#page3 #box",{
//     scale : 0,
//     delay : 1,
//     duration : 2,
//     rotation : 360
// })


// gsap.from("#page2 h1", {
//     opacity : 0,
//     x : 500,
//     duration : 2,
//     scrollTrigger : {
//         trigger : "#page2 h1",
//         scroller : "body",
//         markers : true,
//         strat : "top 50%"
//     }
// })



// gsap.from("#page2 h2", {
//     opacity : 0,
//     x : -500,
//     duration : 2,
//     scrollTrigger : {
//         trigger : "#page2 h2",
//         scroller : "body",
//         markers : true,
//         strat : "top 50%"
//     }
// })


// gsap.to("#partB h1",{
//     transform : "translateX(-150%)",
//     scrollTrigger : {
//         trigger : "#partB",
//         scroller : "body",
//         markers : true,
//         start : "top 0%",
//         end : "top -100%",
//         scrub : 2,
//         pin : true
//     }
// })


// 👉 Learn SVG


let initialPath = `M 10 100 Q 750 100 1490 100`;

let finalPath = `M 10 100 Q 750 100 1490 100`;


var string = document.querySelector("#string");

string.addEventListener("mousemove", function(dets){
    // console.log(dets.x);
    // console.log("entered");
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 1490 100`,
    gsap.to("svg path",{
        attr : {d:initialPath}, // 👉 for change attributes of any tag
        duration : 0.3,
        ease : "power3.out"
    })
})
string.addEventListener("mouseleave", function(){
    // console.log("leaved");
    gsap.to("svg path",{
        attr : {d:finalPath},
        duration : 1.5,
        ease : "elastic.out(1,0.2)"
    })
})

