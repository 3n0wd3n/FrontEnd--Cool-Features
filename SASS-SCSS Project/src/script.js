// const spanElements = document.getElementsByTagName('span');

// for (const span of spanElements) {
//  console.log(span.textContent)
// }

let button = document.querySelectorAll(".button");
let color = document.querySelector("#color");

function test(btn) {
  console.log(btn)
}

for (let i in button) {
  button[i].onclick = function() {
    test(button[i]);
  };
}
