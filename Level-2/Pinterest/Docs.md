➡️Basics of Document Object Model manupulation

// 👉 Document Object Model manupulation --> HTML ke kisi bhi element ko select krke change kr pana isse change krne ke all process me there are something i.e.
// 👉 Selection
let a  = document.querySelector("#home");

// 👉 CSS Change
a.style.color = "red";
// a.style.backgroundColor = "yellow";
// a.style.fontFamily = "Arial"

// 👉 HTML Change
// a.innerHTML = "<i>About</i>"
// a.innerHTML = "<sup>About</sup>"

// // 👉 text Change
// a.textContent = "this is home";
//  //      ⭕R
// a.innerText = "this is home";  // 👉 this is old way

// 👉 adding Listeners
a.addEventListener('mouseenter', function(){
    a.style.color = 'green';
})
a.addEventListener('mouseleave', function(){
    a.style.color = 'black'
})


