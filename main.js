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




