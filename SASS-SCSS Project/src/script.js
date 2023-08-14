// const spanElements = document.getElementsByTagName('span');

// for (const span of spanElements) {
//  console.log(span.textContent)
// }

let button = document.querySelector("button");
let colorSpan = document.getElementById('color');

button.addEventListener('click', function(){
  otherClasses = Array.from(button.classList);
  for (let i = 0; i < otherClasses.length; i++){
    if (otherClasses[i].includes("blue")){
      colorSpan.style.color = "blue";
    }
    if (otherClasses[i].includes("green")){
      colorSpan.style.color = "green";
    }
    if (otherClasses[i].includes("red")){
      colorSpan.style.color = "red";
    }
  }
})