// 1️⃣ show real products

let products = [
    {name :"White Chair" , headline : "Soft like Cloud", price : "15,000", image : "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D" },
    
    {name :"Woodden Chair" , headline : "Traditional Chair", price : "10,000", image : "https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D" },

    {name :"Modern White Chair" , headline : "Modern soft chair", price : "16,000", image : "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fHww" },

    {name :"White Table" , headline : "white round table", price : "12,000", image : "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvdW5kJTIwdGFibGV8ZW58MHx8MHx8fDA%3D" },

    {name :"Round Chair" , headline : "Round Office Chair", price : "14,500", image : "https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29ybmVyJTIwc29mYXxlbnwwfHwwfHx8MA%3D%3D" },

];
let popular = [
    {name :"Coffee Round Table" , headline : "Coffee Table", price : "9,000", image : "https://images.unsplash.com/photo-1551029612-9760a92ad772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvcm5lciUyMHNvZmF8ZW58MHx8MHx8fDA%3D" },
    
    {name :"Hanging White Lamp" , headline : "Hanging lamp", price : "3,000", image : "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D" },

    {name :"Modern Copper Lamp" , headline : "Modern Copper Hanging Lamp", price : "5,000", image : "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D" },

    {name :"Wooden Wardrobe" , headline : "Wooden Almirah", price : "12,000", image : "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FyZHJvYmV8ZW58MHx8MHx8fDA%3D" },

    {name :"Hammock" , headline : "Round Hammock", price : "14,500", image : "https://media.istockphoto.com/id/1277726652/photo/designer-hanging-chair-near-tropical-houseplants-interior-design.jpg?s=612x612&w=0&k=20&c=K1GxCLvfLDB-ZJfPlNDGtNFEd1TUyVzZOI82R6ySsuI=" },

];


let cart = [];

function addProduct(){
    let clutter = "";
    products.forEach(function(product,index){
        clutter += ` <div class="product w-fit  rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
            <img class="w-full h-full object-cover"  src="${product.image} alt="image not found"/>
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.headline}</h3>
                    <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
                </div>
                <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                    <i data-index="${index}" class="add ri-add-line"></i>
                </button>
            </div>
        </div>
    </div>`;
})

    document.querySelector(".products").innerHTML = clutter;
}



function addPopularProducts(){
    let clutter = "";
    popular.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="image not found">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${product.price}</h4>
        </div>
    </div>`;
    });
    document.querySelector(".populars").innerHTML = clutter;
}


// ▶️ Card Functinality
function addToCart(){
    document.querySelector(".products")
    .addEventListener("click", function(details){
        if(details.target.classList.contains('add')){
            // console.log("added");
            cart.push(products[details.target.dataset.index]);
            // console.log(cart);
        }
    })
}


// ▶️ check functionality
function showCart(){
    document.querySelector(".carticon")
    .addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";

        var clutter = "";
        cart.forEach(function(product,index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden" >
                <img class="w-full h-full object-cover" src="${product.image}" alt="image not found"/>
            </div>
            <div>
                <h3 class="font-semibold" >${product.name}</h3>
                <h5 class="text-sm font-semibold opacity-80" >${product.price}</h5>
            </div>
        </div>`;
        })

        document.querySelector(".cartexpnd").innerHTML = clutter;
    });
}


showCart();
addToCart();
addPopularProducts();
addProduct();