// const spanElements = document.getElementsByTagName('span');

// for (const span of spanElements) {
//  console.log(span.textContent)
// }

let button = document.querySelectorAll(".button");
let colorSpan = document.querySelector("#colorSpan");

function test(btn) {
  if (btn.classList[1].includes("blue")){
      colorSpan.style.color = "blue";
  }
  if (btn.classList[1].includes("green")){
      colorSpan.style.color = "green";
  } 
  if (btn.classList[1].includes("red")){
      colorSpan.style.color = "red";
  } 
}

for (let i in button) {
  button[i].onclick = function() {
    test(button[i]);
  };
}
