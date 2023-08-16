/* 
Proměnné
*/

var number = 42;
var name = "John";

/*
Podmínky
*/

if (number > 50) {
    console.log("Číslo je větší než 50.");
} else {
    console.log("Číslo je menší nebo rovno 50.");
}

/*
Cykly
*/

for (var i = 0; i < 5; i++) {
    console.log("Opakování číslo " + i);
}

/* 
Funkce
*/

function greet(name) {
    console.log("Ahoj, " + name + "!");
}

greet("Alice");

/* 
Anonymní funkce
*/

var multiply = function(a, b) {
    return a * b;
};

var result = multiply(3, 4);

/*
Práce s HTML DOM
*/

// Získání elementu podle ID
var element = $("#myElement");

// Přidání třídy k elementu
element.addClass("highlight");

// Změna textu elementu
element.text("Nový text");

/*
Selektory
*/

// Vybrání všech odstavců
var paragraphs = $("p");

// Vybrání elementu s konkrétním ID
var specificElement = $("#myElement");

/*
Práce s HTML
*/

// Přidání nového odstavce do elementu s ID "container"
$("#container").append("<p>Nový odstavec</p>");

// Změna atributu elementu
element.attr("src", "novy-obrazek.jpg");

// .addClass(className) - Přidá třídu k vybraným elementům.
$("p").addClass("highlight");

// .removeClass(className) - Odebere třídu z vybraných elementů.
$("p").removeClass("highlight");

// .toggleClass(className) - Přidá třídu, pokud není přítomná, a odebere ji, pokud je přítomná.
$("p").toggleClass("highlight");

// .text(textContent) - Nastaví textový obsah vybraných elementů.
$("p").text("Nový text");

// .html(htmlContent) - Nastaví HTML obsah vybraných elementů.
$("div").html("<p>Nový odstavec</p>");

// .append(content) - Přidá obsah na konec vybraných elementů.
$("ul").append("<li>Nová položka</li>");

// .prepend(content) - Přidá obsah na začátek vybraných elementů.
$("ul").prepend("<li>Nová položka</li>");

// .attr(attributeName, value) - Nastaví hodnotu atributu vybraných elementů.
$("img").attr("src", "novy-obrazek.jpg");

// .removeAttr(attributeName) - Odebere zvolený atribut z vybraných elementů.
$("a").removeAttr("href");

// .css(propertyName, value) - Nastaví CSS vlastnost vybraných elementů.
$("div").css("color", "blue");

// .hide() - Skryje vybrané elementy.
$(".box").hide();

// .show() - Zobrazí vybrané elementy.
$(".box").show();

// .fadeIn() - Plynule zobrazí vybrané elementy.
$(".box").fadeIn();

// fadeOut() - Plynule skryje vybrané elementy.
$(".box").fadeOut();

// .on(eventName, eventHandler) - Přidá funkci k zpracování určité události pro vybrané elementy.
$("button").on("click", function() {
    console.log("Tlačítko bylo kliknuto.");
});

// .attr() - Ukáže jaké další třídy element má -> stejné jako classList ve vanille
$(".box").attr("class");

// .split() - Nám pomůže nasázet to do pole
$(".box").attr("class").split(/\s+/);

/*
Šipkový (arrow) zápis funkcí je nový způsob definice funkcí v JavaScriptu, který byl představen v ECMAScript 6 (ES6). Tento zápis je zkrácený a často se používá pro anonymní funkce. V jQuery můžeš použít šipkový zápis funkcí pro manipulaci s DOMem a událostmi. 
*/

// Klasický zápis
$("button").on("click", function() {
    console.log("Tlačítko bylo kliknuto.");
});

// Šipkový zápis
$("button").on("click", () => {
    console.log("Tlačítko bylo kliknuto.");
});
