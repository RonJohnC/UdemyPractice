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