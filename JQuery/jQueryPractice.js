// Select all Divs and give them a purple background

$("div").css("background", "purple");

// Select divs with the "highlight" class and make them 200 pixels wide.

$(".highlight").css("width", "200px");

// Select div with the id of "third" and give it an orange border.

// $("#third").css("border", "2px solid orange");

$("#third").css({"border-color": "orange",
				"border-style": "solid",
				"border-width": "2px"});

//Bonus Question: Make first Div font color pink.

// $("div:first").css("color", "pink");

// $("div").first().css("color", "pink");

// $("div:first-of-type").css("color", "pink");

// $(".highlight").prev().first().css("color", "pink");

// var firstDiv = $("div")[0];
// firstDiv.style.color = "pink";

$("h1").next().css("color", "pink");