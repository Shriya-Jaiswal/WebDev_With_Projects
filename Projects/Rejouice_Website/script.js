function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}


function breakText(){
    let h1 = document.querySelector("h1");
    let h1Text = h1.textContent
    let splitedText = h1Text.split("");
    // console.log(splitedText);
    // let halfvalue = Math.floor(splitedText.length/2);
    let clutter = "";
    splitedText.forEach(function(e){
        clutter+= `<span>${e}</span>`
    })


    // splitedText.forEach(function(e,idx){
    //     if(idx < halfvalue){
    //         clutter = clutter + `<span class="char1">${e}</span>`
    //     }
    //     else{
    //         clutter = clutter + `<span class="char2">${e}</span>`
    //     }
    // })
    // console.log(clutter);
    h1.innerHTML = clutter;
    
// 👉 gsap code for direct h1 span
gsap.from(" h1 span",{
    y : 50,
    opacity : 0,
    duration : 0.8,
    delay : 0.5,
    // stagger : -0.15, // 👉 reverse se animation hoga like right to left
    stagger : 0.15, // 👉 Animation left to right hoga 
})


// gsap.from("h1 .char1",{
//     y : 50,
//     duration : 0.6,
//     delay : 0.5,
//     opacity : 0,
//     stagger : 0.15 // 👉 Animation left to right hoga 
// })

// gsap.from("h1 .char2",{
//     y : 50,
//     duration : 0.6,
//     delay : 0.5,
//     opacity : 0,
//     stagger : -0.15, // 👉 reverse se animation hoga like right to left
// })

}

function cursorEffect(){
    let page1Content = document.querySelector("#page1-content");
    let cursor = document.querySelector("#cursor");

    // // 👉 Animate the background cursor with the mouse pointer by pure javaScript  
    // page1Content.addEventListener("mousemove", function(dets){
    //     cursor.style.left = dets.x + "px";
    //     cursor.style.top = dets.y + "px";
    // })

    // // 👉 Animate the background cursor with the mouse pointer by gsap 
    page1Content.addEventListener("mousemove", function(dets){
        gsap.to(cursor,{
        x:dets.x,
        y:dets.y
        })  
    });

    page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale : 1,
            opacity:1
        })
    })
    page1Content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale : 0,
            opacity:0
        })
    })
}
    
function page2Animation(){
    gsap.from(".elem h1",{
        y:120,
        stagger : 0.25,
        duration : 1,
        scrollTrigger : {
            trigger : "#page2",
            scroller : "#main",
            start : "top 40%",
            end : "top 37%",
            // markers : true,
            scrub : 2
        }
    })
}

function page3Animation(){
    gsap.from(".elem3 h1",{
        y:120,
        stagger : 0.25,
        duration : 1,
        scrollTrigger : {
            trigger : "#page2",
            scroller : "#main",
            start : "top 40%",
            end : "top 37%",
            // markers : true,
            scrub : 2
        }
    })
}


function sliderAnimation(){
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        }
    });
}


function loader(){
    let tl =  gsap.timeline();
    tl.from("#loader h3",{
        x:40,
        opacity:0,
        duration:1,
        stagger : 0.1
    })

    tl.to("#loader h3",{
        opacity : 0,
        x:-10,
        stagger : 0.1,
        duration :1
    })
   
    tl.to("#loader",{
        opacity : 0
    })

    tl.from("#page1-content h1",{
        y : 100,
        opacity : 0,
        stagger : 0.1,
        duration : 0.5,
        delay : -0.5
    })

    tl.to("#loader",{
        display : "none"
    })
}



locoScroll();
loader()
breakText();

cursorEffect();

page2Animation();

page3Animation();

sliderAnimation();

