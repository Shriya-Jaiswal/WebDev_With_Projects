▶️ cart feature project

👉 what to do : 

1️⃣ show real products
1️⃣ show real Popular products
2️⃣ on click of product add button add it to the cart

👉 each element pr alag alag event Listner lagane se it takes a lot of memory to alag alag eventListner  na lga kr hum event Bubbling ka use kr sakte hai ---> Event Bubbling means each element pr event listner na laga kr hum event listner lga sakte hai inke parent pr 


👉 we can also use document.createElement instead of clutter 

👉 jb hum kisi parent pr event listner lgate hai toh event Listner ke function me we receieve the details and uss details me target hota hai target means kis pr click hua tha 


👉 html me data-value = "${index}" krke hum uss particuler element ko value de sakte hai ----> forEach() function product/ or second perameter me index deta hai

console.log(details.target) -----> means kis pr click hua hai

👉 now uss clicked item ki data value find out krne ke liye ---> dataset ka use kiya jata hai
console.log(details.target.dataset) -----> means kis pr click hua hai

