// if (jQuery) {
// 	alert("jQuery linked via CDN!!")
// } else {
// 	alert("Javascript linked, but no jQuery. :(")
// }

$("h1").click(function(){
	alert("h1 clicked!")
});

// $("button").click(function(){
// 	alert("Button clicked!!")
// });

$("button").click(function(){
	var text = $(this).text();
	console.log("You clicked " + text);
	// $(this).text("I warned you!");
});

$("input").keypress(function (event){
	if (event.which === 13) {
		alert("You hit the ENTER key!!!");
	};
});

$("h1").on("click", function(){
	$(this).css("color", "purple");
});

$("input").on("keypress", function(){
	console.log("Keypressed!!!");
});

$("button").on("mouseover", function(){
	$(this).css("font-weight", "bold");
	$(this).css("background-color", "lightblue");
});

$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
	$(this).css("background-color", "lightgray");
});