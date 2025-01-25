function initLoco(){
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

initLoco();


let cursor = document.querySelector("#cursor");

let main = document.querySelector("#main");

// let video = document.querySelector("#vdo");
document.addEventListener("mousemove", function(dets){
  cursor.style.left = dets.x + 20 + "px";
  cursor.style.top = dets.y + 20 + "px";
})

// video.addEventListener("mouseenter", function(){
//   let text = cursor.innerHTML = "sound on";
//   text.style.fontSize = "80px";
//   text.style.backgroundColor = "red";
//   text.style.color = "#000";
// })
// video.addEventListener("mouseleave", function(){
//   cursor.innerHTML = "";
// })

let tl = gsap.timeline({
    scrollTrigger : {
        trigger : "#page1 h1",
        scroller : "#main",
        // markers : true,
        start : "top 27%",
        end : "top 0",
        scrub : 3
    }
});

tl.to("#page1 h1",{
    x : -100,
   
},"anim");

tl.to("#page1 h2",{
    x : 100
},"anim")

tl.to("#page1 video",{
    width : "90%"
},"anim")


let tl2 = gsap.timeline({
  scrollTrigger : {
      trigger : "#page1 h1",
      scroller : "#main",
      // markers : true,
      start : "top -115%",
      end : "top -120%",
      scrub : 3
  }
});

tl2.to("#main",{
  backgroundColor :"#fff",
});



let tl3 = gsap.timeline({
  scrollTrigger : {
      trigger : "#page1 h1",
      scroller : "#main",
      // markers : true,
      start : "top -280%",
      end : "top -300%",
      scrub : 3
  }
});

tl3.to("#main",{
  backgroundColor : "#0F0D0D",
});



let boxes = document.querySelectorAll(".box");

boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      // elem.style.backgroundColor = "red"
      let imgAtt = elem.getAttribute("data-image")
      // console.log(imgAtt);
      cursor.style.width = "470px";
      cursor.style.height = "370px";
      cursor.style.borderRadius = "0"
      cursor.style.backgroundImage = `url(${imgAtt})`
    });
    elem.addEventListener("mouseleave",function(){
      // elem.style.backgroundColor = "transparent"
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      cursor.style.borderRadius = "50%"
      cursor.style.backgroundImage = `none`
    });
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})