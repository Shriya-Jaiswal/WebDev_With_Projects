▶️ GSAP ----> [GreenSock Animation Platform] GSAP Javascript ki Animation librery hai ---> for creating animation it is already created librery

▶️ Animation  : it is use for inhance the user's experience and user can be more engaged in the website ---> Animation kuch visual effects jisse hmari website aur bhi jayda attrective ho jati hai 

👉 Librery ---> is basically kisi ek tarike ka code ya feature hmme provide krti hai like 👉 Locomotive JS 

👉 Locomotive use hoti hai to create 🔴 smooth scrolling in website

👉 React JS --> it is basically used to create frontEnd UI

❓ But what exactly is GSAP ? ---> GSAP is basically used for creating moving Animation

👉 Scrolltrigger --> GSAP ka ek plugging hai ---> jo ki scrolling ke time Animation create krne ke kaam aata hai

👉 Swiper JS --> it is used to create slider Animation


👉 Apply GSAp CDN on before our scrip.js file in index.html

👉 in script.js

👉 there are three method that is 
1️⃣ gsap.to()
2️⃣ gsap.from()
2️⃣ gsap.fromTo()

1️⃣ gsap.to() ---> jab hmara element Initial to final tk move kr raha hai wahi hmara animation hai jb hum isse initial position to final position tk le kr jaate hai toh to ka use krte hai

2️⃣ gsap.from() ---> hum yaha pr final to initial use krte hai *like opposite to gsap.to

👉 gsap.to() --> takes two perameters --> 1️⃣ kis element ko aniate krna chate ho 2️⃣ ,{}

👉 1️⃣ same like css me jaise kisi tag , element ko catch krte hai same waise hi yaha pr bhi likhenge 
👉 2️⃣ ,{} --> ans inside {} same like css property ---> in key value pair me 



scale : 1 -----> size normal hai
scale : 2  -----> size 2 apma work essire  hai


GSAp - GreenSock Animation Platform
GSAP - Its a library of JavaScript for making animation that make website interacting and engaging GSAp is used for making moving Animation or transition and 
GSAp - Animation bnane ke liye ek bani hui library hai
Animation - any movement , transition of website --> jisse user ka experience enhance hota hai. or in a nutshell Animation is a visual effects that makes website intresting , Actractive 

ScrollTrigger - its a plugging of GSAP to Animate things on the scrolling time
LocoMotive is used for smooth Scrolling
React JS - used for creating front end or UI
Swiper js - to creates slides in js

gsap.to("target Animated things/element",{
    // inside {} we will write here what to do for Animation, in the form of key value pair, or properties and value form
    // 👉 inside this function we can apply css properties as well in camalcase 
})

👉 there is 3 methods 
1️⃣ gsap.to() - element initial position to final position me move krega tb we can use gsap.to() method
2️⃣ gsap.from() - element final position to initial position me move krega tb we can use gsap.from() method
3️⃣ gsap.fromTo()

gsap.to("#box",{
    x : 1000, // 👉 move in x axis
    duration:2, // 👉 it will take 2seconds tk for move in x axis --> total Animate hone me 2 second lega
    delay : 1 // 👉 1 second ke baad Animate hoga
    stagger : 1, // 👉 same name ke bahut sare element ko ek ek krke chalana 
    // stagger : -1 // 👉 means sabse last wala element sabse pahle aayga
    repeat : 1 , // 👉 1 value per ye two times chalega because 1 time to autometic chal raha tha and 1 more time repeat ke liye chalega yadi isse infinite chalana ho toh hmme isse -1 value dea hoga
    yoyo : true // 👉 for reverse back animation 
})


timeline ---> timeline is used for giving the estimate time to animate elements/things ---> ye cheezo ko order me chalata hai like one by one

let tl = gsap.timeline();

tl.to("#box",{
    x : 1200,
    duration : 1.2,
    delay : 1
})

tl,from("h1",{
    x : 1200,
    duration : 1.5,
    delay : 1
    opacity :0
})

👉 we do not need to write gsap.to() or gsap.from() ----> if we create a timeline tjen we do not need to write the gsap.to() or gsap.from() again


👉 Scrolltrigger --> scrolling ke time pr Animation perform krne ke liye use hota hai


gsap.from("#page2 #box",{
    scale : 0,
    delay : 1,
    duration : 2,
    rotation : 360,
    // scrollTrigger : "#page2 #box" // 👉 shortcut
    scrollTrigger : {
        trigger:"#page2 #box",
        scroller : "body",  // 👉 most of the time scroller me body will work fine bahut hi rare case honge like when we use locomotive and lenish tb scroller ki value kuch or ho sakti hai from body 
        markers : true, // 👉 isse only hum start and end point dekhne ke liye enable krte hai
        start : "top 60%",
        end : "top 30%",
        scrub :  2 , // true, // : 👉 we can give true, false, or any number from 1 to 5 depending upon the smoothness Animation while scrolling
        pin : true // 👉 jb pin property use karenge child me tb toh hamesha parent ko trigger karenge
    }
})


gsap.to("#partB h1",{
    transform : "translateX(-150%)",
    scrollTrigger : {
        trigger : "#partB",
        scroller : "body",
        markers : true,
        start : "top 0%",
        end : "top -100%",
        scrub :  2 , // true, // : 👉 we can give true, false, or any number from 1 to 5 depending upon the smoothness Animation while scrolling
        pin : true // 👉 jb pin property use karenge child me tb toh hamesha parent ko trigger karenge
    }
})

➡️ SVG ---> Scalable vector graphic ---> besically its like a text/ or svg is like a container jiske under bahut saari cheze hoti hai like path, circle, rectangle, polygon,
➡️ SVG ---> Morf SVG and Draw SVG ye dono gsap ke plugin hai 

<svg width="190" height="160">
        <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
</svg>

inside path
M 10 80 - means move to point (starting point) --> means where to start 10 is a value of x axis, and 80 is a value of y axis

Q 95 10 180 80 - Q means Quadratic curve, jo ki 2 points contain karega jisme x axis me 95 hai and y axis me 10 jo ki second point hai and the third point would be x axis me 180 and y axis me 80 

Quadratic curve denotes by Q , and cubic curve denotes by C

👉 toh 3 points ko mila kr curve bna sakte hai 
👉 stroke means curve ka color

