const personName = {
  firstName: "Michael",
  lastName: "Hajný"
}

const {firstName} = personName;
console.log(firstName);

// -----------------------------//

const mNames = ["Michael", "Josef", "Jacob"];
const gNames = ["Bara", "Katka", "Simona"];

const allNames = [...mNames, ...gNames]
console.log(`All names: ${allNames}`);

// -----------------------------//

// Tradiční syntaxe
function multiply(a, b) {
  return a * b;
}

// Šipková syntaxe
const multiply = (a, b) => a * b;

//Je důležité poznamenat, že šipkové funkce mají některé specifické vlastnosti, které je odlišují od tradiční syntaxe, jako je implicitní návratová hodnota při jednoduchých výrazech a odlišné zacházení s kontextem this. Tyto vlastnosti mohou být důležité při používání pokročilejších funkcionalit JavaScriptu.

// -----------------------------//

function sayName() {
  console.log(this.name);
}

const obj1 = {
  name: "John",
  sayName: sayName
};

const obj2 = {
  name: "Jane",
  sayName: sayName
};

obj1.sayName(); // Vypíše "John"
obj2.sayName(); // Vypíše "Jane"

const fn = obj1.sayName;
fn(); // Vypíše "undefined" nebo vyvolá chybu v přísném módu

// -----------------------------//

const obj = {
  name: "John",
  sayHello: function() {
    console.log("Hello, " + this.name);
  }
};

obj.sayHello(); // Vypíše "Hello, John"

// -----------------------------//

const numbers = [1, 2, 3, 4, 5];

// Filtrace (filter): Vybere pouze sudá čísla
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers); // Výstup: [2, 4]

// Filtrace (filter): Vybere pouze sudá čísla - rychlejší zápis
const evenNumbers2 = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers2); // Výstup: [2, 4]

// -----------------------------//

const numbers = [1, 2, 3, 4, 5];

// Transformace (map): Vynásobí každé číslo dvěma
const multipliedNumbers = numbers.map((number) => {
    return number * 2;
});
console.log(multipliedNumbers); // Výstup: [2, 4, 6, 8, 10]

// Transformace (map): Vynásobí každé číslo dvěma - rychlejší zápis
const multipliedNumbers2 = numbers.map(number => number * 2);
console.log(multipliedNumbers2); // Výstup: [2, 4, 6, 8, 10]

// -----------------------------//

const numbers = [1, 2, 3, 4, 5];

// Redukce (reduce): Sčítá všechna čísla dohromady
const sum = numbers.reduce((accumulator, curentNumber) => {
    return accumulator + curentNumber
    
}, 0);
console.log(sum); // Výstup: 15

// Redukce (reduce): Sčítá všechna čísla dohromady - rychlejší zápis
const sum2 = numbers.reduce((accumulator, curentNumber) => accumulator + curentNumber, 0);
console.log(sum2); // Výstup: 15

// -----------------------------//

const numbers = [5, 4, 1, 3];

// Řazení (sort): Seřadí čísla od nejmenšího po největší
const sortedNumbers = numbers.sort((a, b) => {
    return a - b;
});
console.log(sortedNumbers); // Výstup: [1, 2, 3, 4, 5]

// Řazení (sort): Seřadí čísla od nejmenšího po největší - rychlejší zápis
const sortedNumbers2 = numbers.sort((a, b) => a - b);
console.log(sortedNumbers2); // Výstup: [1, 2, 3, 4, 5]

// -----------------------------//

// add(className): Adds one or more class names to the element's list of classes.
const element = document.getElementById("myElement");
element.classList.add("newClass");

// -----------------------------//

// remove(className): Removes one or more class names from the element's list of classes.
const element = document.getElementById("myElement");
element.classList.remove("oldClass");

// -----------------------------//

// toggle(className): Toggles the presence of a class name in the element's list of classes. If the class name is already present, it is removed; otherwise, it is added.
const element = document.getElementById("myElement");
element.classList.toggle("active");

// -----------------------------//

// contains(className): Checks if the element has a specific class.
const element = document.getElementById("myElement");
if (element.classList.contains("special")) {
  // Do something
}

// -----------------------------//

// replace(oldClassName, newClassName): Replaces a class name with another class name.
const element = document.getElementById("myElement");
element.classList.replace("oldClass", "newClass");

// -----------------------------//

// item(index): Returns the class name at the specified index.
const element = document.getElementById("myElement");
const className = element.classList.item(0);
console.log(className);

// -----------------------------//

// length: Returns the number of classes in the element's list of classes.
const element = document.getElementById("myElement");
const classCount = element.classList.length;
console.log(classCount);

// -----------------------------//

// Vybere prvek v dokumentu, který má ID odpovídající hodnotě hash cíle události
document.querySelector(event.target.hash)

// Pokusí vybrat prvek v dokumentu na základě adresu URL zadanou v atributu href cíle události
document.querySelector(event.target.href)

// -----------------------------//

// Příklad JSON objektu
let jsonData = {
  "name": "John Doe",
  "age": 30,
  "city": "New York"
};

// Převod JSON objektu na řetězec
let jsonString = JSON.stringify(jsonData);
console.log(jsonString);
// Výstup: {"name":"John Doe","age":30,"city":"New York"}

// Převod řetězce na JSON objekt
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
// Výstup: { name: 'John Doe', age: 30, city: 'New York' }

// Přístup k hodnotám v JSON objektu
console.log(jsonObject.name); // Výstup: John Doe
console.log(jsonObject.age); // Výstup: 30
console.log(jsonObject.city); // Výstup: New York

// -----------------------------//

// HTML
<div id="example"></div>

// JS
// Vyberte element s id "example"
var element = document.getElementById("example");

// Nastavte HTML obsah pomocí vlastnosti .innerHTML
element.innerHTML = "<h1>Vítejte!</h1><p>Toto je příklad použití .innerHTML v JavaScriptu.</p>";

// -----------------------------//

// HTML
<ul class="list">
  <li class="list__item">A</li>
  <li class="list__item">B</li>
  <li class="list__item">C</li>
</ul>

// JS
var newElement = document.createElement("li");
var newTextNode = document.createTextNode("D");
newElement.appendChild(newTextNode);
newElement.style.color = "gold";
newElement.classList.add("list__item")
newElement.classList.add("list__item--last")

// výběr seznamu
var seznam = document.querySelector(".list");

// přidání další položky seznamu
seznam.appendChild(newElement);

// přidání do středu seznamu
var anotherNewElement = document.createElement("li");
anotherNewElement.innerHTML = "E";
seznam.insertBefore(anotherNewElement, seznam.children[2]);

// přidání nadpisu
seznam.insertAdjacentHTML("beforebegin", "<h1>nadpis</h1>")

// změna na základě kliknutí
document.addEventListener('click', function(event){  
  let hash = document.querySelector(event.target.hash)
  var newElement2 = document.createElement("li");
  newElement2.innerHTML = "F"
  newElement2.classList.add("list__item")
  var seznam = document.querySelector(".list");
  var listItems = document.querySelectorAll('.list__item');
  if (!inStructure(listItems)){
  seznam.appendChild(newElement2);
  }
})

function inStructure(listItems) {
  var breaker = false;

  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    console.log(listItem.textContent.trim())
    if (listItem.textContent.trim() === "F") {
      breaker = true;
      break; // Ukončí procházení smyčky, protože prvek byl nalezen
    }
  }

  return breaker;
}






