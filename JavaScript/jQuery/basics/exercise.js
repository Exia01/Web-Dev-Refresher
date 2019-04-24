$( document ).ready(function() {
   // Select all divs and give them a purple background
$("div").css("background", "grey");


// Select the divs with class "highlight" and make them 200px wide
$("div.highlight").css("width", "200px");

// Select the div with id "third" and give it a orange border
$("#third").css("border", "4px solid orange");

// Bonus: Select the first div only and change its font color to pin
$("div:first-of-type").css("color", "pink");
$("div:nth-child(2)").css("color", "white");
$("div :first-child").css("color", "blue");

});