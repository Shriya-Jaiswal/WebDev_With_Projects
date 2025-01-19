// 👉 get the data 
let users = [
    {
        profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:4,
        location : "Delhi, India", 
        name:"Alee", 
        age : 23, 
        interests : [
            {
                icon : `<i class="ri-music-2-fill"></i>`,
                interest: "Music"
            }, 
            {
                icon : `<i class="ri-brush-fill"></i>`,
                interest : "Painting"
            }
        ], 
        bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eum dolor dicta ea ipsum libero.",
        isFriend : null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 3,
        location : "Bhopal, India", 
        name:"Ema", 
        age : 24, 
        interests : [
            {
                icon : `<i class="ri-music-2-fill"></i>`,
                interest: "Music"
            }, 
            {
                icon : `<i class="ri-quill-pen-fill"></i>`,
                interest : "Writing"
            }
        ],  
        bio:"Lorem ipsum, dolor sit.",
        isFriend : null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1517241938558-898c3afe02c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1521037621765-40fb72a65ba1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 14,
        location : "Bangalore, India", 
        name:"Nishi", 
        age : 26, 
        interests : [
            {
                icon : `<i class="ri-music-2-fill"></i>`,
                interest: "Music"
            }, 
            {
                icon : `<i class="ri-artboard-fill"></i>`,
                interest : "Teaching"
            }
        ],  
        bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eum dolor dicta ea ipsum libero.",
        isFriend : null
    },
    {
        profilePic: "https://plus.unsplash.com/premium_photo-1668895511242-5d78e1101aa5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:4,
        location : "Delhi, India", 
        name:"Avni", 
        age : 22, 
        interests : [
            {
                icon : `<i class="ri-music-2-fill"></i>`,
                interest: "Music"
            }, 
            {
                icon : `<i class="ri-pencil-ruler-fill"></i>`,
                interest : "Crafting"
            }
        ],  
        bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem eum dolor dicta ea ipsum libero.",
        isFriend : null
    },
];

function select(elem){
    return document.querySelector(elem); // 👉 we don't need to write document.querySelector() agin and again
}

let curr = 0; // this variable decides that which person we are gonna show
let isAnimating = false;

function setData(index){
    select(".profimg img").src = users[index].profilePic;

    select(".badge h5").textContent = users[index].pendingMessage;

    select(".location h3").textContent = users[index].location;

    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter = "";
    users[index].interests.forEach(function(interest){
        clutter += ` <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
                           ${interest.icon}
                            <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
                        </div>`
    })

    select(".tags").innerHTML = clutter;
    select(".bio p").textContent = users[index].bio;
}

(function setInitials(){
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr+1]?.displayPic; // 👉 this ? is like ptional chaining for last div/element ki yadi hai to rakh do

    setData(curr);
   
    curr = 2;
})(); // here we created iife




function imageChange(){
    if(!isAnimating){
        isAnimating = true;

        let tl =  gsap.timeline({
            onComplete : function(){
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingcard");
        
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
                
        
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale : 1,
                    opacity : 1
                })
        
                if(curr === users.length){
                    curr = 0;
                }
                select(".maincard img").src = users[curr].displayPic;
                
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }
           });
           tl.to(".maincard", {
            scale : 1.1,
            opacity : 0,
            ease : Circ,
            duration : .9,
           },"start")
           .from(".incomingcard", {
            scale : .9,
            opacity : 0,
            ease : Circ,
            duration : 1.1,
           },"start")
    }
}


let deny = select(".reject");
let accept = select(".accept");

deny.addEventListener("click",function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y : "100%",
        stagger : .06,
        ease : Power4.easeInOut,
        duration : 1.5
    })
});

accept.addEventListener("click",function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        y : "100%",
        stagger : .06,
        ease : Power4.easeInOut,
        duration : 1.5
    })
});

(function containerCreater(){
    document.querySelectorAll(".element")
    .forEach(function(element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
        // console.log(div);
        div.appendChild(element);
        select(".details").appendChild(div)
        
    })
})();




