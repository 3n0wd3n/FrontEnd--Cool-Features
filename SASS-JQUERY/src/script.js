$(document).ready(function() { // There are also .load . after
    var button = $(".button");
    var colorSpan = $("#colorSpan");

    function changeColor() {
        var clickedButton = $(this); // Select the clicked button

        if (clickedButton.hasClass("button--red")) {
            colorSpan.css("color", "red");
        } else if (clickedButton.hasClass("button--green")) {
            colorSpan.css("color", "green");
        } else if (clickedButton.hasClass("button--blue")) {
            colorSpan.css("color", "blue");
        }
    }

    button.on("click", changeColor);
});
